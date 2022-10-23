import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriciComponent } from './arici.component';

describe('AriciComponent', () => {
  let component: AriciComponent;
  let fixture: ComponentFixture<AriciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
