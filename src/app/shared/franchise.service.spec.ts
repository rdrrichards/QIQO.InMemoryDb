import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FranchiseService } from './franchise.service';

describe('FranchiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ FranchiseService ]
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
