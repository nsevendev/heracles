import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {DarkModeLocalStorageKey, DarkStore} from '../domain/dark-mode/store/store.root';

@Component({
  selector: 'her-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  darkStore = inject(DarkStore)
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (true === isPlatformBrowser(this.platformId)) {
      this.darkStore.update(localStorage.getItem(DarkModeLocalStorageKey.DARK_MODE) === 'true');
    }
  }
}
