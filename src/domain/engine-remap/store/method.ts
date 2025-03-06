import { patchState } from '@ngrx/signals';
import {
  EngineRemap,
  EngineRemapStoreForMethods,
} from '../models/engine-remap.models';
import { EngineRemapService } from '../service/engine-remap.service';

export function createMethods(
  store: EngineRemapStoreForMethods,
  engineRemapService: EngineRemapService
) {
  return {
    loadEngineRemap: () => {
      engineRemapService.getFirstEngineRemap().subscribe((data) => {
        patchState(store, { engineRemap: data });
      });
    },
    updateEngineRemap: (engineRemap: EngineRemap) => {
      patchState(store, { engineRemap });
    },
  };
}
