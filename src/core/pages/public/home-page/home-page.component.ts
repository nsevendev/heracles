import { Component, inject, OnInit } from '@angular/core';
import { HomeEngineRemapSectionComponent } from '../../../components/home-engine-remap-section/home-engine-remap-section.component';
import { InterfaceInfosStore } from '../../../../domain/interface-infos/store/interface-infos.root';

@Component({
  selector: 'her-home-page',
  imports: [HomeEngineRemapSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private store = inject(InterfaceInfosStore);

  engineRemapInfo = this.store.engineRemap;

  constructor() {
    this.store.loadEngineRemap();
  }
}
