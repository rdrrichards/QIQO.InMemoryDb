import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EpisodeService } from './episode.service';

describe('EpisodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ EpisodeService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([EpisodeService, HttpTestingController],
    (service: EpisodeService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));
});
