import { TestBed } from '@angular/core/testing';

import { EpisodeService } from './episode.service';

describe('EpisodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeService = TestBed.get(EpisodeService);
    expect(service).toBeTruthy();
  });
});
