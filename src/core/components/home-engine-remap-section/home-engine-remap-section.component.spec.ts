import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEngineRemapSectionComponent } from './home-engine-remap-section.component';

describe('HomeEngineRemapSectionComponent', () => {
  let component: HomeEngineRemapSectionComponent;
  let fixture: ComponentFixture<HomeEngineRemapSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEngineRemapSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEngineRemapSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
