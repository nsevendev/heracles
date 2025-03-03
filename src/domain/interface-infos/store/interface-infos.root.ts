import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
import { InterfaceInfoStore } from '../models/interface-infos.models';
import { createComputed } from './computed';
import { createMethods } from './method';
import { EngineRemapService } from '../service/engine-remap.service';
import { inject } from '@angular/core';

export const InterfaceInfosStore = signalStore(
  withState<InterfaceInfoStore>({
    engineRemap: null,
  }),

  withComputed((store) => createComputed(store)),
  withMethods((store) => createMethods(store, inject(EngineRemapService)))
);
