import { computed, inject } from '@angular/core';
import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
import { patchState } from '@ngrx/signals';
import { Task } from '../model/todolist.model';

type TodolistState = {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
};

// type pour l'état initial de mon super store
const initialState: TodolistState = {
  tasks: [],
  filter: 'all',
};

// je crée mon store avce l'état initial
export const TodolistStore = signalStore(
  withState(initialState),

  // j'jaoute des propriétés customs pour retourner les tasks, les filtrer etc ... sans manipulation du store
  withComputed(({ tasks, filter }) => ({
    filteredTasks: computed(() => {
      const currentFilter = filter();
      const allTasks = tasks();

      if (currentFilter === 'completed') {
        return allTasks.filter((task) => task.completed);
      } else if (currentFilter === 'incomplete') {
        return allTasks.filter((task) => !task.completed);
      }

      return allTasks;
    }),

    tasksCount: computed(() => tasks().length),
    completedCount: computed(
      () => tasks().filter((task) => task.completed).length
    ),
  })),

  // j'ajout des method pour manipuler le store, donc add, check, delete et la modification de la propriété filter
  withMethods((store) => ({
    addTask(content: string): void {
      patchState(store, (state) => {
        const newTask: Task = {
          id: Date.now(),
          content,
          completed: false,
        };
        return { tasks: [...state.tasks, newTask] };
      });
    },

    toggleTask(id: number): void {
      patchState(store, (state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      }));
    },

    deleteTask(id: number): void {
      patchState(store, (state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }));
    },

    updateFilter(filter: 'all' | 'completed' | 'incomplete'): void {
      patchState(store, { filter });
    },
  }))
);

// pour provide le store de facon global
/*export const TodolistStore = signalStore(
    // 👇 Providing `BooksStore` at the root level.
    { providedIn: 'root' },
    withState(initialState)
    // { ... }
  );*/
