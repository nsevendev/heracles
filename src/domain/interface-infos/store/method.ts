import { patchState } from '@ngrx/signals';
import {
  EngineRemap,
  InterfaceInfoStoreForMethods,
} from '../models/interface-infos.models';
import { EngineRemapService } from '../service/engine-remap.service';

export function createMethods(
  store: InterfaceInfoStoreForMethods,
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
