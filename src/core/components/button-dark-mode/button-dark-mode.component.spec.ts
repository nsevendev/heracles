import {ComponentFixture, TestBed} from '@angular/core/testing';
import { ButtonDarkModeComponent } from './button-dark-mode.component';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {provideRouter} from '@angular/router';
import {PLATFORM_ID} from '@angular/core';
import {DarkStore} from '../../../domain/dark-mode/store/store.root';

describe('ButtonDarkModeComponent', () => {
  let component: ButtonDarkModeComponent;
  let fixture: ComponentFixture<ButtonDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDarkModeComponent, Button, Tooltip],
      providers: [
        provideRouter([]),
        {provide: PLATFORM_ID, useValue: 'browser'},
        DarkStore
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('should toggle dark mode and store in localStorage', () => {
    spyOn(localStorage, 'setItem');

    component.darkStore.toggle();
    fixture.detectChanges()

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'darkMode',
      component.darkStore.dark() ? 'true' : 'false'
    );
  });

  it("ne doit rien faire si l'élément est introuvable", () => {
    spyOn(document, "querySelector").and.returnValue(null);
    const localStorageSpy = spyOn(localStorage, "setItem");

    component.darkStore.update(true);
    fixture.detectChanges();

    expect(localStorageSpy).not.toHaveBeenCalled();
  });
});
