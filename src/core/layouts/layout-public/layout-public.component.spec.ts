import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPublicComponent } from './layout-public.component';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from '../../../app/app.routes';

describe('LayoutPublicComponent', () => {
  let component: LayoutPublicComponent;
  let fixture: ComponentFixture<LayoutPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPublicComponent],
      providers: [
        provideRouter(routes, withComponentInputBinding())
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
