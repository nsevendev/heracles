import { Inject, Injectable } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { STORE_TOKEN } from '../store/store.token';

@Injectable()
export class MethodsService {
  constructor(@Inject(STORE_TOKEN) private store: any) {}

  addTask = (content: string) => {
    patchState(this.store, () => {
      const newTask: Task = {
        id: Date.now(),
        content,
        completed: false,
      };
      return { tasks: [...this.store.tasks, newTask] };
    });
  };

  toggleTask = (id: number) => {
    patchState(this.store, () => ({
      tasks: this.store.tasks.map((task: Task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (id: number) => {
    patchState(this.store, () => ({
      tasks: this.store.tasks.filter((task: Task) => task.id !== id),
    }));
  };

  updateFilter = (filter: 'all' | 'completed' | 'incomplete') => {
    patchState(this.store, { filter });
  };
}
