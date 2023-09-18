import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVacationComponent } from './table-vacation.component';

describe('TableVacationComponent', () => {
  let component: TableVacationComponent;
  let fixture: ComponentFixture<TableVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
