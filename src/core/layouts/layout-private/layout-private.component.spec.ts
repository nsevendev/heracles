import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPrivateComponent } from './layout-private.component';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from '../../../app/app.routes';

describe('LayoutPrivateComponent', () => {
  let component: LayoutPrivateComponent;
  let fixture: ComponentFixture<LayoutPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPrivateComponent],
      providers: [
        provideRouter(routes, withComponentInputBinding())
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
