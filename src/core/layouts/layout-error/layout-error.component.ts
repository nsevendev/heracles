import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'her-layout-error',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './layout-error.component.html',
  styleUrl: './layout-error.component.css'
})
export class LayoutErrorComponent {

}
