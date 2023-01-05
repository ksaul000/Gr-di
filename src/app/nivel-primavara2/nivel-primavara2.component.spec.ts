import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelPrimavara2Component } from './nivel-primavara2.component';

describe('NivelPrimavara2Component', () => {
  let component: NivelPrimavara2Component;
  let fixture: ComponentFixture<NivelPrimavara2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelPrimavara2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelPrimavara2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
