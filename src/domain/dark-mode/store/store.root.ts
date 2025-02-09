import {signalStore, withComputed, withMethods, withState, WritableStateSource} from '@ngrx/signals';
import {createMethods} from './method';
import {Signal} from '@angular/core';
import {createComputed} from './computed';

export type DarkMode = {
  dark: boolean
}

export enum DarkModeLocalStorageKey {
  DARK_MODE = 'darkMode'
}

export type DarkModeMethods = WritableStateSource<DarkMode> & {
  dark: () => boolean;
};

export type DarkModeComputed = {
  dark: Signal<boolean>;
};

const init: DarkMode = {
  dark: true
}

export const DarkStore = signalStore(
  {providedIn: 'root'},
  withState(init),
  withComputed((store) => createComputed(store)),
  withMethods((store) => createMethods(store)),
)
