import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelVara1Component } from './nivel-vara1.component';

describe('NivelVara1Component', () => {
  let component: NivelVara1Component;
  let fixture: ComponentFixture<NivelVara1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelVara1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelVara1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
