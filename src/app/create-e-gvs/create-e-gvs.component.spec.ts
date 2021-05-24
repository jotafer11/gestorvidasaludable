import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEGvsComponent } from './create-e-gvs.component';

describe('CreateEGvsComponent', () => {
  let component: CreateEGvsComponent;
  let fixture: ComponentFixture<CreateEGvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEGvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEGvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
