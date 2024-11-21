import { Consultation } from './consultation.model';

export interface ConsultationsResponse {
  data: Consultation[];
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
