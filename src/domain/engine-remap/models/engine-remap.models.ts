import { Signal } from '@angular/core';
import { WritableStateSource } from '@ngrx/signals';

export interface EngineRemap {
  libelle: string;
  description: string;
}

export interface EngineRemapStoreInitialValue {
  engineRemap: EngineRemap | null;
}

export type EngineRemapStoreForMethods =
  WritableStateSource<EngineRemapStoreInitialValue> & {
    engineRemap: () => EngineRemap | null;
  };

export type EngineRemapStoreForComputed = {
  engineRemap: Signal<EngineRemap | null>;
};
