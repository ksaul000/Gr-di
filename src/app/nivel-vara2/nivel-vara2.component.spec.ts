import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelVara2Component } from './nivel-vara2.component';

describe('NivelVara2Component', () => {
  let component: NivelVara2Component;
  let fixture: ComponentFixture<NivelVara2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelVara2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelVara2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
