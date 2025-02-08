import { Directive } from '@angular/core';
import { InputText } from 'primeng/inputtext';

@Directive({
  selector: '[borderColorBlue]',
})
export class InputBorderColorBlueDirective {
  token = {
    root: {
      borderColor: 'rgb(52, 152, 219)',
    },
  };

  constructor(private inputText: InputText) {
    this.inputText.dt = this.token;
  }
}
