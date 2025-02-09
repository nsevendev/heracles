import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'her-button-avatar-connexion',
  imports: [
    Button,
    Tooltip,
    RouterLink
  ],
  templateUrl: './button-avatar-connexion.component.html',
  styleUrl: './button-avatar-connexion.component.css'
})
export class ButtonAvatarConnexionComponent {

}
