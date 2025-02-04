import { inject, Inject, Injectable } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { Todolist2State, Todolist2Store } from '../store/todolist2.store';

@Injectable()
export class Methods2Service {
  store: any;

  constructor() {
    this.store = inject(Todolist2Store);
  }

  addTask = (content: string) => {
    patchState(this.store, (state: Todolist2State) => {
      const newTask: Task = {
        id: Date.now(),
        content,
        completed: false,
      };
      return { tasks: [...state.tasks, newTask] };
    });
  };

  toggleTask = (id: number) => {
    patchState(this.store, (state: Todolist2State) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (id: number) => {
    patchState(this.store, (state: Todolist2State) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  };

  updateFilter = (filter: 'all' | 'completed' | 'incomplete') => {
    patchState(this.store, { filter });
  };
}
