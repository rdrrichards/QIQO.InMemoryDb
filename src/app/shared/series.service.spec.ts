import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { SeriesService } from './series.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [SeriesService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([SeriesService, HttpTestingController],
    (service: SeriesService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`getSeriesEpisodes should be truthy`, waitForAsync(inject([SeriesService, HttpTestingController],
    (service: SeriesService, httpClient: HttpTestingController) => {
      expect(service.getSeriesEpisodes(1)).toBeTruthy();
  })));
});
