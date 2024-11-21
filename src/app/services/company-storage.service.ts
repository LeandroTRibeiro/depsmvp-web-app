import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyStorageService {
  private company: Company | null = null;

  setCompany(company: Company): void {
    this.company = company;
  }

  getCompany(): Company | null {
    return this.company ? this.company : null;
  }
}
