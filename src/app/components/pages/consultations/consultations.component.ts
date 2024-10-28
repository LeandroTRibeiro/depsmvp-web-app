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
import {
  ConsultationsResponse
} from "../../../models/consultations-response.model";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];
  headers: any = {};

  consultResponse: ConsultationsResponse | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Consultation>;

  dataSource: ConsultationsDatasource;

  constructor(
    private _translate: TranslateService,
    public dialog: MatDialog,
    private _apiService: ApiService,
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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConsultationFormDialogComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }
}
