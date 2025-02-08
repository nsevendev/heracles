import { patchState } from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import {
  TodolistState,
  TodolistStore,
  TodolistStoreForMethods,
} from '../store/todolist.store';

export function createMethods(store: TodolistStoreForMethods) {
  return {
    addTask: (content: string) => {
      patchState(store, (state: TodolistState) => {
        const newTask: Task = {
          id: Date.now(),
          content,
          completed: false,
        };
        return { tasks: [...state.tasks, newTask] };
      });
    },

    toggleTask: (id: number) => {
      patchState(store, (state: TodolistState) => ({
        tasks: state.tasks.map((task: Task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      }));
    },

    deleteTask: (id: number) => {
      patchState(store, (state: TodolistState) => ({
        tasks: state.tasks.filter((task: Task) => task.id !== id),
      }));
    },

    updateFilter: (filter: 'all' | 'completed' | 'incomplete') => {
      patchState(store, { filter });
    },
  };
}
