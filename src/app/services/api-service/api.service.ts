import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultation } from '../../models/consultation.model';
import { environment } from '../../../environments/environment';
import { ConsultationsResponse } from '../../models/consultations-response.model';
import { Company } from '../../models/company.model';
import { Pep } from '../../models/pep.model';
import { PepRequestModel } from '../../models/pepRequest.model';
import { CompanyRequestModel } from '../../models/companyRequest.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

  getConsults(pageNUmber: number, pageSize: number) {
    return this._httpClient.get<ConsultationsResponse>(
      `${environment.apiUrl}consultation/consultations?pageNumber=${pageNUmber}&pageSize=${pageSize}`
    );
  }

  getCompanyByConsultationId(consultationId: number) {
    return this._httpClient.get<Company>(
      `${environment.apiUrl}companies/company?consultationId=${consultationId}`
    );
  }

  getPepByConsultationId(consultationId: number) {
    return this._httpClient.get<Pep[]>(
      `${environment.apiUrl}peps/pep?id=${consultationId}`
    );
  }

  getPep(body: PepRequestModel) {
    return this._httpClient.post<Pep[]>(`${environment.apiUrl}peps/cpf`, body);
  }

  getCompany(body: CompanyRequestModel) {
    return this._httpClient.post<Company>(
      `${environment.apiUrl}companies/cnpj`,
      body
    );
  }
}
