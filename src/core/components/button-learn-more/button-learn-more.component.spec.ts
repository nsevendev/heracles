import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLearnMoreComponent } from './button-learn-more.component';

describe('ButtonLearnMoreComponent', () => {
  let component: ButtonLearnMoreComponent;
  let fixture: ComponentFixture<ButtonLearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLearnMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
