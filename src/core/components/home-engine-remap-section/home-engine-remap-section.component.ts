import { Component } from '@angular/core';
import { ButtonLearnMoreComponent } from '../button-learn-more/button-learn-more.component';

@Component({
  selector: 'her-home-engine-remap-section',
  imports: [ButtonLearnMoreComponent],
  templateUrl: './home-engine-remap-section.component.html',
  styleUrl: './home-engine-remap-section.component.css',
})
export class HomeEngineRemapSectionComponent {
  backgroundImage = 'url("../../../assets/images/engine-remap-home.webp")';
}
