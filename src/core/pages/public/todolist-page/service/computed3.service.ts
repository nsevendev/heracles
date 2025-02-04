import { computed, inject, Injectable } from '@angular/core';
import { Task } from '../model/todolist.model';
import { Todolist3Store } from '../store/todolist3.store';

@Injectable()
export class Computed3Service {
  store: any;

  constructor() {
    this.store = inject(Todolist3Store);
  }

  filteredTasks = computed(() => {
    const currentFilter = this.store.filter();
    const allTasks = this.store.tasks();

    if (currentFilter === 'completed') {
      return allTasks.filter((task: Task) => task.completed);
    } else if (currentFilter === 'incomplete') {
      return allTasks.filter((task: Task) => !task.completed);
    }

    return allTasks;
  });

  tasksCount = computed(() => this.store.tasks().length);

  completedCount = computed(
    () => this.store.tasks().filter((task: Task) => task.completed).length
  );
}
