import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vita } from './vita';

describe('Vita', () => {
  let component: Vita;
  let fixture: ComponentFixture<Vita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vita],
    }).compileComponents();

    fixture = TestBed.createComponent(Vita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
