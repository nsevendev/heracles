import {Component} from '@angular/core';
import {ButtonDarkModeComponent} from '../button-dark-mode/button-dark-mode.component';
import {ButtonAvatarConnexionComponent} from '../button-avatar-connexion/button-avatar-connexion.component';
import {BrandBigComponent} from '../brand-big/brand-big.component';

@Component({
  selector: 'her-header-public',
  imports: [
    ButtonDarkModeComponent,
    ButtonAvatarConnexionComponent,
    BrandBigComponent
  ],
  templateUrl: './header-public.component.html',
  styleUrl: './header-public.component.css'
})
export class HeaderPublicComponent{

}
