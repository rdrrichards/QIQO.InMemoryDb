import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { EpisodeService } from './episode.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('EpisodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [EpisodeService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([EpisodeService, HttpTestingController],
    (service: EpisodeService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));
});
