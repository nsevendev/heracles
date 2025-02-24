import { patchState } from '@ngrx/signals';
import {
  EngineRemap,
  InterfaceInfoStoreForMethods,
} from '../models/interface-infos.models';

export function createMethods(store: InterfaceInfoStoreForMethods) {
  return {
    updateEngineRemap: (engineRemap: EngineRemap) => {
      patchState(store, { engineRemap });
    },
  };
}
