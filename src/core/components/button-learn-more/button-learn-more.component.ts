import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'her-button-learn-more',
  imports: [RouterModule, ButtonModule],
  templateUrl: './button-learn-more.component.html',
  styleUrl: './button-learn-more.component.css',
})
export class ButtonLearnMoreComponent {
  @Input() navigateTo: string = '';
}
