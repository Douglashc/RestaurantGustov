import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVacationComponent } from './search-vacation.component';

describe('SearchVacationComponent', () => {
  let component: SearchVacationComponent;
  let fixture: ComponentFixture<SearchVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
