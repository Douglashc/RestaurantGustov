import { TestBed } from '@angular/core/testing';

import { ServiceEmplyeeService } from './service-emplyee.service';

describe('ServiceEmplyeeService', () => {
  let service: ServiceEmplyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEmplyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
