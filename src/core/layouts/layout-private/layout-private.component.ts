import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderPublicComponent} from '../../components/header-public/header-public.component';
import {MenuLeftSideComponent} from '../../components/menu-left-side/menu-left-side.component';

@Component({
  selector: 'her-layout-private',
  imports: [
    RouterOutlet,
    HeaderPublicComponent,
    MenuLeftSideComponent
  ],
  templateUrl: './layout-private.component.html',
  styleUrl: './layout-private.component.css'
})
export class LayoutPrivateComponent {

}
