import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelToamna1Component } from './nivel-toamna1.component';

describe('NivelToamna1Component', () => {
  let component: NivelToamna1Component;
  let fixture: ComponentFixture<NivelToamna1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelToamna1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelToamna1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
