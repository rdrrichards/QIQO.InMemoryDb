import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [MovieService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([MovieService, HttpTestingController],
    (service: MovieService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));
});
