import { TestBed } from '@angular/core/testing';

import { IntervalUtilsService } from './interval-utils.service';

describe('IntervalUtilsService', () => {
  let service: IntervalUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
