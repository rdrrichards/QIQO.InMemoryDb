import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
  it('createDb should be truthy', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service.createDb()).toBeTruthy();
  });
});
