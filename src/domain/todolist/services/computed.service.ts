import { computed } from '@angular/core';
import { Task } from '../model/todolist.model';
import { CounterStoreForComputed } from '../store/todolist.store';

export function createComputed(store: CounterStoreForComputed) {
  return {
    filteredTasks: computed(() => {
      const currentFilter = store.filter();
      const allTasks = store.tasks();

      if (currentFilter === 'completed') {
        return allTasks.filter((task: Task) => task.completed);
      } else if (currentFilter === 'incomplete') {
        return allTasks.filter((task: Task) => !task.completed);
      }

      return allTasks;
    }),
    tasksCount: computed(() => store.tasks().length),
    completedCount: computed(
      () => store.tasks().filter((task: Task) => task.completed).length
    ),
  };
}
