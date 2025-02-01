import { ComponentFixture, TestBed } from '@angular/core/testing';

import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {AppComponent} from './app.component';

describe('LayoutErrorComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter(routes, withComponentInputBinding())
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
