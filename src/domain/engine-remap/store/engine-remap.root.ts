import {
  signalStore,
  withState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
import { EngineRemapStoreInitialValue } from '../models/engine-remap.models';
import { createComputed } from './computed';
import { createMethods } from './method';
import { EngineRemapService } from '../service/engine-remap.service';
import { inject } from '@angular/core';

export const EngineRemapStore = signalStore(
  withState<EngineRemapStoreInitialValue>({
    engineRemap: null,
  }),

  withComputed((store) => createComputed(store)),
  withMethods((store) => createMethods(store, inject(EngineRemapService)))
);
