import { TestBed } from '@angular/core/testing';

import { UniversityserviceService } from './universityservice.service';

describe('UniversityserviceService', () => {
  let service: UniversityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
