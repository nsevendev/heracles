import { Injectable, signal } from '@angular/core';
import { signalStore, withState } from '@ngrx/signals';
import { InterfaceInfoStoreState } from '../models/interface-infos.models';

@Injectable({ providedIn: 'root' })
export class InterfaceInfosStore {
  private store = signalStore(
    withState<InterfaceInfoStoreState>({
      engineRemap: null,
    })
  );
}
