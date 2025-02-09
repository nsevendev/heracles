import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderPublicComponent} from '../../components/header-public/header-public.component';
import {FooterPublicComponent} from '../../components/footer-public/footer-public.component';

@Component({
  selector: 'her-layout-public',
  imports: [
    RouterOutlet,
    HeaderPublicComponent,
    FooterPublicComponent,
  ],
  templateUrl: './layout-public.component.html',
  styleUrl: './layout-public.component.css'
})
export class LayoutPublicComponent {

}
