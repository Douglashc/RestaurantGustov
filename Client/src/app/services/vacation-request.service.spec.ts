import { TestBed } from '@angular/core/testing';

import { VacationRequestService } from './vacation-request.service';

describe('VacationRequestService', () => {
  let service: VacationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
