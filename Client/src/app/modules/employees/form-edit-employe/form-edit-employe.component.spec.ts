import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditEmployeComponent } from './form-edit-employe.component';

describe('FormEditEmployeComponent', () => {
  let component: FormEditEmployeComponent;
  let fixture: ComponentFixture<FormEditEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
