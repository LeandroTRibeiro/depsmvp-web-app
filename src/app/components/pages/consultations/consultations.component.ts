import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { Consultation } from "../../../models/consultation.model";
import { ConsultationsDatasource } from "./consultations-datasource";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];
  headers: any = {};

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Consultation>;

  dataSource: ConsultationsDatasource;

  constructor(
    private _translate: TranslateService
  ) {
    this.dataSource = new ConsultationsDatasource();
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
}
