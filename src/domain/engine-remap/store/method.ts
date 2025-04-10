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
      engineRemapService.getFirstEngineRemap().subscribe({
        next: (data) => {
          console.log('ma data:', data);
          console.log('avant mise a jour du store', store.engineRemap());
          patchState(store, { engineRemap: data });
          console.log('aprés mise a jour du store', store.engineRemap());
        },
        error: (error) => console.error('Error => ', error),
      });
    },

    updateEngineRemap: (engineRemap: EngineRemap) => {
      patchState(store, { engineRemap });
    },
  };
}
