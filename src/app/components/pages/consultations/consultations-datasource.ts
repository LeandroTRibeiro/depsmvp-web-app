import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Consultation} from "../../../models/consultation.model";

export class ConsultationsDatasource extends DataSource<Consultation> {
  data: Consultation[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  connect(): Observable<Consultation[]> {
    this.data = [
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2024-01-01', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2025-01-02', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2026-01-03', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2027-01-04', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2028-01-05', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2029-01-06', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2024-01-01', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2025-01-02', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2026-01-03', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2027-01-04', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2028-01-05', consultation_interval: '3 meses' },
      { id: 1, user: 'administrador', consultation_date: new Date().toLocaleDateString('pt-BR'), consultation_type: 'CNPJ', consultation_code: '09.431.070/0013-02', consultation_date_reference: '2029-01-06', consultation_interval: '3 meses' }
    ];

    if (this.paginator && this.sort) {
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        switchMap(() => {
          return observableOf(this.getPagedData(this.getSortedData([...this.data])));
        })
      );
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }


  disconnect(): void {}

  private getPagedData(data: Consultation[]): Consultation[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(data: Consultation[]): Consultation[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'user': return compare(a.user, b.user, isAsc);
        case 'consultation_date': return compare(new Date(a.consultation_date).getTime(), new Date(b.consultation_date).getTime(), isAsc); // Usando getTime()
        case 'consultation_type': return compare(a.consultation_type, b.consultation_type, isAsc);
        case 'consultation_code': return compare(a.consultation_code, b.consultation_code, isAsc);
        case 'consultation_date_reference': return compare(new Date(a.consultation_date_reference).getTime(), new Date(b.consultation_date_reference).getTime(), isAsc); // Usando getTime()
        case 'consultation_interval': return compare(a.consultation_interval, b.consultation_interval, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
