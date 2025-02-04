import { computed, Inject, Injectable } from '@angular/core';
import { Task } from '../model/todolist.model';
import { STORE_TOKEN } from '../store/store.token';

@Injectable()
export class ComputedService {
  constructor(@Inject(STORE_TOKEN) private store: any) {}

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
