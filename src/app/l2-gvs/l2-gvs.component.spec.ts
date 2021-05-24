import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2GvsComponent } from './l2-gvs.component';

describe('L2GvsComponent', () => {
  let component: L2GvsComponent;
  let fixture: ComponentFixture<L2GvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L2GvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L2GvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
