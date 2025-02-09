import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPrivateComponent } from './layout-private.component';
import {provideRouter, RouterOutlet, withComponentInputBinding} from '@angular/router';
import {routes} from '../../../app/app.routes';
import {PLATFORM_ID} from '@angular/core';
import {HeaderPublicComponent} from '../../components/header-public/header-public.component';
import {MenuLeftSideComponent} from '../../components/menu-left-side/menu-left-side.component';
import {provideNoopAnimations} from '@angular/platform-browser/animations';

describe('LayoutPrivateComponent', () => {
  let component: LayoutPrivateComponent;
  let fixture: ComponentFixture<LayoutPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LayoutPrivateComponent,
        RouterOutlet,
        HeaderPublicComponent,
        MenuLeftSideComponent
      ],
      providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideNoopAnimations(),
        {provide: PLATFORM_ID, useValue: 'browser'},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
