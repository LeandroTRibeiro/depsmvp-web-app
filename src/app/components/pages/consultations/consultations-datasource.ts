import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, switchMap, startWith, tap } from 'rxjs/operators';
import { Observable, merge, BehaviorSubject } from 'rxjs';
import { Consultation } from '../../../models/consultation.model';
import { ApiService } from '../../../services/api-service/api.service';

export class ConsultationsDatasource extends DataSource<Consultation> {
  dataSubject = new BehaviorSubject<Consultation[]>([]);
  data: Consultation[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  totalItems = 0;
  loadConsultations: (pageNumber: number, pageSize: number) => Observable<Consultation[]>;

  constructor(loadConsultations: (pageNumber: number, pageSize: number) => Observable<Consultation[]>) {
    super();
    this.loadConsultations = loadConsultations;
  }

  connect(): Observable<Consultation[]> {

    if (this.paginator && this.sort) {
      return merge(
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        startWith(null),
        switchMap(() => {
          const pageIndex = this.paginator?.pageIndex ?? 0;
          const pageSize = this.paginator?.pageSize ?? 10;
          return this.loadConsultations(pageIndex + 1, pageSize);
        }),
        tap(() => {
          this.dataSubject.next(this.data);
        })
      );
    } else {
      throw Error('Paginator and Sort are not set');
    }
  }

  disconnect(): void {
    this.dataSubject.complete();
  }

  public getSortedData(data: Consultation[]): Consultation[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    const sorted = data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'user':
          return compare(a.userId, b.userId, isAsc);
        case 'consultation_date':
          return compare(
            new Date(a.consultationDate).getTime(),
            new Date(b.consultationDate).getTime(),
            isAsc
          );
        case 'consultation_type':
          return compare(a.consultationType, b.consultationType, isAsc);
        case 'consultation_code':
          return compare(a.consultationCode, b.consultationCode, isAsc);
        case 'consultation_date_reference':
          return compare(
            new Date(a.consultationDateReference).getTime(),
            new Date(b.consultationDateReference).getTime(),
            isAsc
          );
        case 'consultation_interval':
          return compare(a.consultationInterval, b.consultationInterval, isAsc);
        default:
          return 0;
      }
    });

    this.data = sorted;
    return sorted;
  }
}

function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  if (a === b) return 0;
  if (a === null || a === undefined) return isAsc ? -1 : 1;
  if (b === null || b === undefined) return isAsc ? 1 : -1;

  if (typeof a === 'string' && typeof b === 'string') {
    return (
      a.localeCompare(b, undefined, { sensitivity: 'base' }) * (isAsc ? 1 : -1)
    );
  }

  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
