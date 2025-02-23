import { inject } from '@angular/core';
import { InterfaceInfosStore } from './interface-infos.root';
import { InterfaceInfoStoreState } from '../models/interface-infos.models';

export class InterfaceInfosMethods {
  private store = inject(InterfaceInfosStore);
}
