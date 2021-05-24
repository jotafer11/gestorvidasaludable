import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1GvsComponent } from './l1-gvs.component';

describe('L1GvsComponent', () => {
  let component: L1GvsComponent;
  let fixture: ComponentFixture<L1GvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L1GvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L1GvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
