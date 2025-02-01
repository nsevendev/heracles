import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutErrorComponent } from './layout-error.component';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from '../../../app/app.routes';

describe('LayoutErrorComponent', () => {
  let component: LayoutErrorComponent;
  let fixture: ComponentFixture<LayoutErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutErrorComponent],
      providers: [
        provideRouter(routes, withComponentInputBinding())
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
