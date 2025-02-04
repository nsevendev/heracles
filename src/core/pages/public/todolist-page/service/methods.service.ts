import { Inject, Injectable } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { STORE_TOKEN } from '../store/store.token';
import { TodolistState } from '../store/todolist.store';

@Injectable()
export class MethodsService {
  constructor(@Inject(STORE_TOKEN) private store: any) {}

  addTask = (content: string) => {
    console.log(this.store);
    patchState(this.store, (state: TodolistState) => {
      console.log(state);
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
