import { Component, inject } from '@angular/core';
import { EngineRemapStore } from '../../../domain/engine-remap/store/engine-remap.root';

@Component({
  selector: 'her-engine-remap-page',
  imports: [],
  templateUrl: './engine-remap-page.component.html',
  styleUrl: './engine-remap-page.component.css',
})
export class EngineRemapPageComponent {
  private store = inject(EngineRemapStore);

  engineRemapInfo = this.store.engineRemap;

  constructor() {
    this.store.loadEngineRemap();
  }
}
