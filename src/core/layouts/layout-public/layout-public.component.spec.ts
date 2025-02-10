import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPublicComponent } from './layout-public.component';
import {provideRouter, RouterOutlet, withComponentInputBinding} from '@angular/router';
import {routes} from '../../../app/app.routes';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {PLATFORM_ID} from '@angular/core';
import {HeaderPublicComponent} from '../../components/header-public/header-public.component';
import {FooterPublicComponent} from '../../components/footer-public/footer-public.component';

describe('LayoutPublicComponent', () => {
  let component: LayoutPublicComponent;
  let fixture: ComponentFixture<LayoutPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LayoutPublicComponent,
        RouterOutlet,
        HeaderPublicComponent,
        FooterPublicComponent,
      ],
      providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideNoopAnimations(),
        {provide: PLATFORM_ID, useValue: 'browser'},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
