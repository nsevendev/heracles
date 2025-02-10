import {Component, effect, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {DarkModeLocalStorageKey, DarkStore} from "../../../domain/dark-mode/store/store.root";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'her-button-dark-mode',
  imports: [
    Button,
    Tooltip
  ],
  templateUrl: './button-dark-mode.component.html',
  styleUrl: './button-dark-mode.component.css'
})
export class ButtonDarkModeComponent{
  darkStore = inject(DarkStore);
  platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const htmlEl = document.querySelector('html');

        if (true === this.darkStore.dark()) {
          htmlEl?.classList.add('dark');
          localStorage.setItem(DarkModeLocalStorageKey.DARK_MODE, 'true');
          return;
        }

        localStorage.setItem(DarkModeLocalStorageKey.DARK_MODE, 'false');
        htmlEl?.classList.remove('dark');
      });
    }
  }
}
