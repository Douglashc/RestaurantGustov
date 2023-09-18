import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVacationComponent } from './form-vacation.component';

describe('FormVacationComponent', () => {
  let component: FormVacationComponent;
  let fixture: ComponentFixture<FormVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
