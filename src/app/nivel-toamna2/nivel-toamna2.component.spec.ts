import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelToamna2Component } from './nivel-toamna2.component';

describe('NivelToamna2Component', () => {
  let component: NivelToamna2Component;
  let fixture: ComponentFixture<NivelToamna2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelToamna2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelToamna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
