import { TestBed } from '@angular/core/testing';

import { FranchiseService } from './franchise.service';

describe('FranchiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FranchiseService = TestBed.get(FranchiseService);
    expect(service).toBeTruthy();
  });
});
