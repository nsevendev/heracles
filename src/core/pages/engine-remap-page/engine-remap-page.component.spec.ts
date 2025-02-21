import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineRemapPageComponent } from './engine-remap-page.component';

describe('EngineRemapPageComponent', () => {
  let component: EngineRemapPageComponent;
  let fixture: ComponentFixture<EngineRemapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineRemapPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineRemapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
