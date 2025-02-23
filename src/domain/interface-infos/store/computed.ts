import { computed, inject } from '@angular/core';
import { InterfaceInfosStore } from './interface-infos.root';

export class InterfaceInfosComputed {
  private store = inject(InterfaceInfosStore);
}
