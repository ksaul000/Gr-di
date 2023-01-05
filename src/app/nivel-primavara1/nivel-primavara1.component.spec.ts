import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPrimavara1Component } from './nivel-primavara1.component';

describe('NivelPrimavara1Component', () => {
  let component: NivelPrimavara1Component;
  let fixture: ComponentFixture<NivelPrimavara1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelPrimavara1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelPrimavara1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
