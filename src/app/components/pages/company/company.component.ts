import { Component, OnInit } from '@angular/core';
import { Company } from '../../../models/company.model';
import { ApiService } from '../../../services/api-service/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CompanyStorageService } from '../../../services/company-storage-service/company-storage.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  company: Company | null = null;
  id: string | null = null;
  mapIframeSrc: SafeResourceUrl | null = null;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _companyStorageService: CompanyStorageService
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');

    if (this.id) {
      this._apiService
        .getCompanyByConsultationId(Number(this.id))
        .subscribe((response) => {
          this.company = response;
          this.createIFrame();
        });
    } else {
      this.company = this._companyStorageService.getCompany();
      this.createIFrame();
    }
  }
  createIFrame() {
    if (this.company) {
      const address = `${this.company.logradouro} ${this.company.numero}, ${this.company.municipio}, ${this.company.uf}`;
      const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
      this.mapIframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}
