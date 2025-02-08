import {
  signalStore,
  withState,
  withMethods,
  withComputed,
  WritableStateSource,
} from '@ngrx/signals';
import { Task } from '../model/todolist.model';
import { createComputed } from '../services/computed.service';
import { createMethods } from '../services/methods.service';
import { Signal } from '@angular/core';

export type TodolistState = {
  tasks: Task[];
  filter: 'all' | 'completed' | 'incomplete';
};

export type TodolistStoreForMethods = WritableStateSource<TodolistState> & {
  tasks: () => Task[];
  filter: () => 'all' | 'completed' | 'incomplete';
};

export type CounterStoreForComputed = {
  tasks: Signal<Task[]>;
  filter: Signal<'all' | 'completed' | 'incomplete'>;
};

// type pour l'état initial de mon super store
const initialState: TodolistState = {
  tasks: [],
  filter: 'all',
};

// je crée mon store avce l'état initial
export const TodolistStore = signalStore(
  withState(initialState),

  withComputed((store) => createComputed(store)),
  withMethods((store) => createMethods(store))
);
