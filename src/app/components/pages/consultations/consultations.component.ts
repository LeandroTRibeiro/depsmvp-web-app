import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Consultation } from "../../../models/consultation.model";
import { ConsultationsDatasource } from "./consultations-datasource";
import { TranslateService } from "@ngx-translate/core";
import { MatDialog } from "@angular/material/dialog";
import { ConsultationFormDialogComponent } from "../../dialogs/consultation-form-dialog/consultation-form-dialog.component";
import { ApiService } from "../../../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];
  headers: any = {};
  dataSource: ConsultationsDatasource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Consultation>;

  constructor(
    private _translate: TranslateService,
    public dialog: MatDialog,
    private _apiService: ApiService,
    private _router: Router,
  ) {
    this.dataSource = new ConsultationsDatasource(this._apiService);
  }

  ngOnInit(): void {
    this._translate.get('consultations.consultation_table.headers').subscribe(translations => {
      this.headers = translations;
      this.displayedColumns = [...Object.keys(this.headers), "action"];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    this.sort.sortChange.subscribe(() => {
      this.dataSource.getSortedData(this.dataSource.data);
    });

    this.dataSource.dataSubject.subscribe(updatedData => {
      this.table.renderRows();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConsultationFormDialogComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  redirectBasedConsultationType(type: string, id: number): void {
    this._router.navigate([`consultations/${type.trim().toLowerCase()}/${id}`]);
  }
}
