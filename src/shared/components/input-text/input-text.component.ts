import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputBorderColorBlueDirective } from '../../directives/primeng/InputBorderColorBlue.directive';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  imports: [InputTextModule, FormsModule, InputBorderColorBlueDirective],
})
export class InputTextComponent {
  @Input() placeholder: string = ''; // je vais pouvoir utiliser placeholder sur mon composant dans les template d'autre composant
  @Output() entered = new EventEmitter<string>(); // meme chose mais pour un événement (dans mon cas, evenement déclencher avec enter)

  onEnter(event: Event): void {
    const input = event.target as HTMLInputElement;
    // je vérifie que l'input contient pas une string vide
    if (input.value.trim()) {
      this.entered.emit(input.value.trim()); // déclenche mon output entered en lui donnant la value de mon input
      input.value = '';
    }
  }
}
