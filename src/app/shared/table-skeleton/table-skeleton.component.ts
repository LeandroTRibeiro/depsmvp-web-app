import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styleUrls: ['./table-skeleton.component.scss']
})
export class TableSkeletonComponent implements OnInit, OnChanges {
  @Input() rowsNumber: number = 10;
  @Input() columnsDisplay: string[] = [];
  @Input() traslateText: boolean = false;
  @Input() jsonTranslatePath: string = '';
  translatedColumns: string[] = [];
  skeletonData:  any[] = [];

  constructor(private _translateService: TranslateService) {}

  ngOnInit(): void {
    this.initializeSkeletonData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.traslateText && this.columnsDisplay?.length > 0 && this.jsonTranslatePath) {
      const translationKeys = this.columnsDisplay.map(
        (column) => `${this.jsonTranslatePath}.${column}`
      );

      this._translateService.get(translationKeys).subscribe(
        (translations: { [key: string]: string }) => {
          this.translatedColumns = this.columnsDisplay.map(
            (column) => translations[`${this.jsonTranslatePath}.${column}`] || " "
          );
        },
        (error) => {
          console.error('Erro ao traduzir colunas:', error);
        }
      );
    }
  }

  private initializeSkeletonData(): void {
    this.skeletonData = Array.from({ length: this.rowsNumber }, () => {
      const row: { [key: string]: string } = {};
      for (const column of this.columnsDisplay) {
        row[column] = '';
      }
      return row;
    });
  }

}
