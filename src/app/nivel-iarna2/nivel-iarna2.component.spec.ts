import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelIarna2Component } from './nivel-iarna2.component';

describe('NivelIarna2Component', () => {
  let component: NivelIarna2Component;
  let fixture: ComponentFixture<NivelIarna2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelIarna2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelIarna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
