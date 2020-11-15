import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MovieService ]
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
