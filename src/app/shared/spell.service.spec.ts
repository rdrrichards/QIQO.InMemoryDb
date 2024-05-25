import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { SpellService } from './spell.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SpellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [SpellService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([SpellService, HttpTestingController],
    (service: SpellService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));
});
