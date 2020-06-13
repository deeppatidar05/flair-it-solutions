import { TestBed } from '@angular/core/testing';

import { InterestCareerService } from './interest-career.service';

describe('InterestCareerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterestCareerService = TestBed.get(InterestCareerService);
    expect(service).toBeTruthy();
  });
});
