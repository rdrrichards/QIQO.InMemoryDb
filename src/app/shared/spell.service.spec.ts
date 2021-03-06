import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SpellService } from './spell.service';

describe('SpellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ SpellService ]
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
