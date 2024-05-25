import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { FranchiseService } from './franchise.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('FranchiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [FranchiseService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([FranchiseService, HttpTestingController],
    (service: FranchiseService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));
});
