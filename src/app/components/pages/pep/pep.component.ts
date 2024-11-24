import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api-service/api.service';
import { Pep } from '../../../models/pep.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { PepStorageService } from '../../../services/pep-storage-service/pep-storage.service';

@Component({
  selector: 'app-pep',
  templateUrl: './pep.component.html',
  styleUrls: ['./pep.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PepComponent implements OnInit {
  peps: Pep[] = [];
  id: string | null = null;
  displayedColumns = [
    'cpf',
    'nome',
    'descricaoFuncao',
    'nomeOrgao',
    'dtInicioExercicio',
    'dtFimExercicio',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: Pep | null = null;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute,
    private _pepStorageService: PepStorageService
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if (this.id) {
      this._apiService
        .getPepByConsultationId(Number(this.id))
        .subscribe((response) => {
          console.log(response);
          this.peps = response;
        });
    } else {
      this.peps = this._pepStorageService.getPeps();
    }
  }

  protected readonly transition = transition;
}
