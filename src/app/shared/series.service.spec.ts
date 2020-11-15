import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SeriesService ]
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
