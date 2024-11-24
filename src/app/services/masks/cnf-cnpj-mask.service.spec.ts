import { TestBed } from '@angular/core/testing';

import { CnfCnpjMaskService } from './cnf-cnpj-mask.service';

describe('CnfCnpjMaskService', () => {
  let service: CnfCnpjMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnfCnpjMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
