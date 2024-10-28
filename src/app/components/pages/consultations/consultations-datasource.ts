import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, switchMap, startWith } from 'rxjs/operators';
import { Observable, merge } from 'rxjs';
import { Consultation } from '../../../models/consultation.model';
import { ApiService } from '../../../services/api.service';

export class ConsultationsDatasource extends DataSource<Consultation> {
  data: Consultation[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  totalItems = 0;

  constructor(private apiService: ApiService) {
    super();
  }

  connect(): Observable<Consultation[]> {
    if (this.paginator && this.sort) {
      return merge(
        this.paginator.page.pipe(startWith({})),
        this.sort.sortChange.pipe(startWith({}))
      ).pipe(
        switchMap(() => {
          return this.loadConsultations(
            (this.paginator?.pageIndex ?? 0) + 1,
            this.paginator?.pageSize ?? 10
          );
        })
      );
    } else {
      throw Error('Paginator and Sort are not set');
    }
  }

  disconnect(): void {}

  private loadConsultations(pageNumber: number, pageSize: number): Observable<Consultation[]> {
    return this.apiService.getConsults(pageNumber, pageSize).pipe(
      map(response => {
        this.data = response.data;
        this.totalItems = response.totalItems;
        this.paginator!.length = this.totalItems;
        return this.getSortedData([...this.data]);
      })
    );
  }

  private getSortedData(data: Consultation[]): Consultation[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'user': return compare(a.userId, b.userId, isAsc);
        case 'consultationDate': return compare(new Date(a.consultationDate).getTime(), new Date(b.consultationDate).getTime(), isAsc);
        case 'consultationType': return compare(a.consultationType, b.consultationType, isAsc);
        case 'consultationCode': return compare(a.consultationCode, b.consultationCode, isAsc);
        case 'consultationDateReference': return compare(new Date(a.consultationDateReference).getTime(), new Date(b.consultationDateReference).getTime(), isAsc);
        case 'interval': return compare(a.consultationInterval, b.consultationInterval, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
