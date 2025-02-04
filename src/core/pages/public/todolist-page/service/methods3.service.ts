import { inject, Inject, Injectable } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { TodolistState, Todolist3Store } from '../store/todolist3.store';

@Injectable()
export class Methods3Service {
  store: any;

  constructor() {
    this.store = inject(Todolist3Store);
  }

  addTask = (content: string) => {
    patchState<TodolistState>(this.store, (state) => {
      const newTask: Task = {
        id: Date.now(),
        content,
        completed: false,
      };
      return { tasks: [...state.tasks, newTask] };
    });
  };

  toggleTask = (id: number) => {
    patchState(this.store, (state: TodolistState) => ({
      tasks: state.tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (id: number) => {
    patchState(this.store, (state: TodolistState) => ({
      tasks: state.tasks.filter((task: Task) => task.id !== id),
    }));
  };

  updateFilter = (filter: 'all' | 'completed' | 'incomplete') => {
    patchState(this.store, { filter });
  };
}
