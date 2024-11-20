import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLargeComponent } from './button-large.component';

describe('ButtonLargeComponent', () => {
  let component: ButtonLargeComponent;
  let fixture: ComponentFixture<ButtonLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
