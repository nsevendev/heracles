import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonAvatarConnexionComponent } from './button-avatar-connexion.component';
import {provideRouter, RouterLink} from '@angular/router';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {PLATFORM_ID} from '@angular/core';

describe('ButtonAvatarConnexionComponent', () => {
  let component: ButtonAvatarConnexionComponent;
  let fixture: ComponentFixture<ButtonAvatarConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ButtonAvatarConnexionComponent,
        Button,
        Tooltip,
        RouterLink
      ],
      providers: [
        provideRouter([]),
        {provide: PLATFORM_ID, useValue: 'browser'},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAvatarConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
