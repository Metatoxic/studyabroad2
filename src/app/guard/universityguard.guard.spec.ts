import { TestBed } from '@angular/core/testing';

import { UniversityguardGuard } from './universityguard.guard';

describe('UniversityguardGuard', () => {
  let guard: UniversityguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UniversityguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
