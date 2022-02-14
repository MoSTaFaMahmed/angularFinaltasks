import { TestBed } from '@angular/core/testing';

import { AdverstingService } from './adversting.service';

describe('AdverstingService', () => {
  let service: AdverstingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdverstingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
