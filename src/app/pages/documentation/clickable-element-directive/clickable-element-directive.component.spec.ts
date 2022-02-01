import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableElementDirectiveComponent } from './clickable-element-directive.component';

describe('ClickableElementDirectiveComponent', () => {
  let component: ClickableElementDirectiveComponent;
  let fixture: ComponentFixture<ClickableElementDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickableElementDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableElementDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
