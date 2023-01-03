import { TestBed } from '@angular/core/testing';

import { IntraAppService } from './intra-app.service';

describe('IntraAppService', () => {
  let service: IntraAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntraAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
