import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelIarna1Component } from './nivel-iarna1.component';

describe('NivelIarna1Component', () => {
  let component: NivelIarna1Component;
  let fixture: ComponentFixture<NivelIarna1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelIarna1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelIarna1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
