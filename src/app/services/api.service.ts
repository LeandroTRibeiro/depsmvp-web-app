import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Consultation} from "../models/consultation.model";
import {environment} from "../../environments/environment";
import {ConsultationsResponse} from "../models/consultations-response.model";

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
}
