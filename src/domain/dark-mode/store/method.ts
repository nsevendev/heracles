import {DarkMode, DarkModeMethods} from './store.root';
import {patchState} from '@ngrx/signals';

export function createMethods(store: DarkModeMethods) {
  return {
    toggle: () => {
      patchState(store, {dark: !store.dark()});
    },

    update: (mode: boolean) => {
      patchState(store, {dark: mode});
    }
  }
}
