import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Consultation} from "../models/consultation.model";
import {environment} from "../../environments/environment";
import {ConsultationsResponse} from "../models/consultations-response.model";
import {Company} from "../models/company.model";
import {Pep} from "../models/pep.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _httpClient: HttpClient
  ) {}

  getConsults(pageNUmber: number, pageSize: number) {
    return this._httpClient.get<ConsultationsResponse>(`${environment.apiUrl}consultation/consultations?pageNumber=${pageNUmber}&pageSize=${pageSize}`);
  }

  getCompanyByConsultationId(consultationId: number) {
    return this._httpClient.get<Company>(`${environment.apiUrl}companies/company?consultationId=${consultationId}`);
  }

  getPepByConsultationId(consultationId: number) {
    return this._httpClient.get<Pep[]>(`${environment.apiUrl}peps/pep?id=${consultationId}`);
  }

}
