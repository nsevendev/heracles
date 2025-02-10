import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderPublicComponent } from './header-public.component';
import {ButtonDarkModeComponent} from '../button-dark-mode/button-dark-mode.component';
import {ButtonAvatarConnexionComponent} from '../button-avatar-connexion/button-avatar-connexion.component';
import {BrandBigComponent} from '../brand-big/brand-big.component';
import {provideRouter} from '@angular/router';
import {PLATFORM_ID} from '@angular/core';

describe('HeaderPublicComponent', () => {
  let component: HeaderPublicComponent;
  let fixture: ComponentFixture<HeaderPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderPublicComponent,
        ButtonDarkModeComponent,
        ButtonAvatarConnexionComponent,
        BrandBigComponent
      ],
      providers: [
        provideRouter([]),
        {provide: PLATFORM_ID, useValue: 'browser'},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
