import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { Computed2Service } from '../service/computed2.service';
import { Methods2Service } from '../service/methods2.service';
import { inject, Provider } from '@angular/core';

export type Todolist2State = {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
};

// type pour l'état initial de mon super store
const initialState: Todolist2State = {
  tasks: [],
  filter: 'all',
};

// je crée mon store avce l'état initial
export const Todolist2Store = signalStore(
  withState(initialState),

  withComputed((store, computed2Service = inject(Computed2Service)) => ({
    ...computed2Service,
  })),

  withMethods((store, methods2Service = inject(Methods2Service)) => ({
    ...methods2Service,
  }))
);
