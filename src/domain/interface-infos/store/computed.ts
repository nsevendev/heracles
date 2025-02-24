import { computed } from '@angular/core';
import { InterfaceInfoStoreForComputed } from '../models/interface-infos.models';

export function createComputed(store: InterfaceInfoStoreForComputed) {
  return {
    engineRemap: computed(() => store.engineRemap()),
  };
}
