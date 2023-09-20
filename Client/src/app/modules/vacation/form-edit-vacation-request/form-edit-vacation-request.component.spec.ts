import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditVacationRequestComponent } from './form-edit-vacation-request.component';

describe('FormEditVacationRequestComponent', () => {
  let component: FormEditVacationRequestComponent;
  let fixture: ComponentFixture<FormEditVacationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditVacationRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditVacationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
