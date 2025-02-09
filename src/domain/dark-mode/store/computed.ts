import {DarkModeComputed} from './store.root';
import {computed} from '@angular/core';

export function createComputed(store: DarkModeComputed) {
  return {
    toolTipButton: computed(() => {
      return store.dark() ? 'Activer le mode clair' : 'Activer le mode sombre'
    }),

    iconButton: computed(() => {
      return store.dark() ? 'pi pi-moon' : 'pi pi-sun'
    }),
  }
}
