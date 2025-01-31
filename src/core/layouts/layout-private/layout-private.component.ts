import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'her-layout-private',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout-private.component.html',
  styleUrl: './layout-private.component.css'
})
export class LayoutPrivateComponent {

}
