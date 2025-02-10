import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBigComponent } from './brand-big.component';
import {provideRouter} from '@angular/router';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {PLATFORM_ID} from '@angular/core';

describe('BrandBigComponent', () => {
  let component: BrandBigComponent;
  let fixture: ComponentFixture<BrandBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandBigComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        {provide: PLATFORM_ID, useValue: 'browser'},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
