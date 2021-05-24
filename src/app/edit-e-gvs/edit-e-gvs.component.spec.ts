import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEGvsComponent } from './edit-e-gvs.component';

describe('EditEGvsComponent', () => {
  let component: EditEGvsComponent;
  let fixture: ComponentFixture<EditEGvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEGvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEGvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
