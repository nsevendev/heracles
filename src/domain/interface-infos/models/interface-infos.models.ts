import { Signal } from '@angular/core';
import { WritableStateSource } from '@ngrx/signals';

export interface EngineRemap {
  title: string;
  description: string;
}

export interface InterfaceInfoStore {
  engineRemap: EngineRemap | null;
}

export type InterfaceInfoStoreForMethods =
  WritableStateSource<InterfaceInfoStore> & {
    engineRemap: () => EngineRemap | null;
  };

export type InterfaceInfoStoreForComputed = {
  engineRemap: Signal<EngineRemap | null>;
};
