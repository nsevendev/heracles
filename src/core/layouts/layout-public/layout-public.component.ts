import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'her-layout-public',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout-public.component.html',
  styleUrl: './layout-public.component.css'
})
export class LayoutPublicComponent {

}
