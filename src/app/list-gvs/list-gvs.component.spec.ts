import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGvsComponent } from './list-gvs.component';

describe('ListGvsComponent', () => {
  let component: ListGvsComponent;
  let fixture: ComponentFixture<ListGvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
