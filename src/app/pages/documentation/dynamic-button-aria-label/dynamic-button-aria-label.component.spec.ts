import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicButtonAriaLabelComponent } from './dynamic-button-aria-label.component';

describe('DynamicButtonAriaLabelComponent', () => {
  let component: DynamicButtonAriaLabelComponent;
  let fixture: ComponentFixture<DynamicButtonAriaLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicButtonAriaLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicButtonAriaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
