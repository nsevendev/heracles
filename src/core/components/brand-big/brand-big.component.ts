import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'her-brand-big',
  imports: [
    Button,
    RouterLink,
  ],
  templateUrl: './brand-big.component.html',
  styleUrl: './brand-big.component.css'
})
export class BrandBigComponent {
}
