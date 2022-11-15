import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareSelectButtonComponent } from './square-select-button.component';

describe('SquareSelectButtonComponent', () => {
  let component: SquareSelectButtonComponent;
  let fixture: ComponentFixture<SquareSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareSelectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
