import { TestBed } from '@angular/core/testing';

import { ApicoinService } from './apicoin.service';

describe('ApicoinService', () => {
  let service: ApicoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
