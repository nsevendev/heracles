import { Component, inject, Signal } from '@angular/core';
import { ButtonLearnMoreComponent } from '../button-learn-more/button-learn-more.component';
import { EngineRemap } from '../../../domain/engine-remap/models/engine-remap.models';
import { EngineRemapStore } from '../../../domain/engine-remap/store/engine-remap.root';

@Component({
  selector: 'her-home-engine-remap-section',
  standalone: true,
  imports: [ButtonLearnMoreComponent],
  templateUrl: './home-engine-remap-section.component.html',
  styleUrl: './home-engine-remap-section.component.css',
})
export class HomeEngineRemapSectionComponent {
  private store = inject(EngineRemapStore);

  engineRemap: Signal<EngineRemap | null> = this.store.engineRemap;

  backgroundImage = 'url("../../../assets/images/engine-remap-home.webp")';

  constructor() {
    this.store.loadEngineRemap();
  }
}
