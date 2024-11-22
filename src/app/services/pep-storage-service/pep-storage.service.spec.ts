import { TestBed } from '@angular/core/testing';

import { PepStorageService } from './pep-storage.service';

describe('PepStorageService', () => {
  let service: PepStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
