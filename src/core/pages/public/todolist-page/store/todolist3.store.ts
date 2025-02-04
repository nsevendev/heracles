import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { ComputedService } from '../service/computed.service';
import { Methods3Service } from '../service/methods3.service';
import { inject, Provider } from '@angular/core';
import { Computed3Service } from '../service/computed3.service';

export type TodolistState = {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
};

// type pour l'état initial de mon super store
const initialState: TodolistState = {
  tasks: [],
  filter: 'all',
};

// je crée mon store avce l'état initial
export const Todolist3Store = signalStore(
  withState(initialState),

  withComputed((store, computed3Service = inject(Computed3Service)) => ({
    ...computed3Service,
  })),

  withMethods((store, methods3Service = inject(Methods3Service)) => ({
    ...methods3Service,
  }))
);
