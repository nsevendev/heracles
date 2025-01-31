import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalErrorPageComponent } from './internal-error-page.component';

describe('InternalErrorPageComponent', () => {
  let component: InternalErrorPageComponent;
  let fixture: ComponentFixture<InternalErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalErrorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
