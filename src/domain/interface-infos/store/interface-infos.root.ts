import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
import { InterfaceInfoStore } from '../models/interface-infos.models';
import { createComputed } from './computed';
import { createMethods } from './method';

export const InterfaceInfosStore = signalStore(
  withState<InterfaceInfoStore>({
    engineRemap: null,
  }),

  withComputed((store) => createComputed(store)),
  withMethods((store) => createMethods(store))
);
