import { computed } from '@angular/core';
import { EngineRemapStoreForComputed } from '../models/engine-remap.models';

export function createComputed(store: EngineRemapStoreForComputed) {
  return {
    engineRemap: computed(() => store.engineRemap()),
  };
}
