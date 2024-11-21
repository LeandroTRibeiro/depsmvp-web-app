import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PepStorageService } from './pep-storage.service';
import { CompanyStorageService } from './company-storage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PepRequestModel } from '../models/pepRequest.model';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  constructor(
    private _apiService: ApiService,
    private _pepStorageService: PepStorageService,
    private _companyStorageService: CompanyStorageService,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  processForm(consultationForm: any) {
    if (consultationForm.type === 'cpf') {
      const pepRequest: PepRequestModel = {
        cpf: consultationForm.document,
        referenceDate: new Intl.DateTimeFormat('pt-BR').format(
          consultationForm.referenceDate
        ),
        interval: consultationForm.interval,
      };

      this._apiService.getPep(pepRequest).subscribe({
        next: (response) => {
          this._pepStorageService.setPeps(response);
          this._router.navigate(['/consultations/cpf']);
          this._dialog.closeAll();
        },
        error: (err) => {
          console.error('Erro na requisição para PEP:', err);
        },
      });
    } else if (consultationForm.type === 'cnpj') {
      const companyRequest = {
        cnpj: consultationForm.document,
        referenceDate: new Intl.DateTimeFormat('pt-BR').format(
          consultationForm.referenceDate
        ),
        interval: consultationForm.interval,
      };

      this._apiService.getCompany(companyRequest).subscribe({
        next: (response) => {
          this._companyStorageService.setCompany(response);
          this._router.navigate(['/consultations/cnpj']);
          this._dialog.closeAll();
        },
        error: (err) => {
          console.error('Erro na requisição para Company:', err);
        },
      });
    }
  }
}
