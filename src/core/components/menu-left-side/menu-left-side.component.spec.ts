import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuLeftSideComponent } from './menu-left-side.component';
import {provideRouter} from '@angular/router';
import {PLATFORM_ID} from '@angular/core';
import {DarkStore} from '../../../domain/dark-mode/store/store.root';
import {PanelMenu} from 'primeng/panelmenu';
import {provideNoopAnimations} from '@angular/platform-browser/animations';

describe('MenuLeftSideComponent', () => {
  let component: MenuLeftSideComponent;
  let fixture: ComponentFixture<MenuLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLeftSideComponent, PanelMenu],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        {provide: PLATFORM_ID, useValue: 'browser'},
        DarkStore
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
