import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConsultationCustomIntervalComponent } from '../consultation-custom-interval/consultation-custom-interval.component';
import { CONSULTATION_CONFIG } from './consultation-form-dialog-config';
import { ApiService } from '../../../services/api-service/api.service';
import { Router } from '@angular/router';
import { PepRequestModel } from '../../../models/pepRequest.model';
import { PepStorageService } from '../../../services/pep-storage-service/pep-storage.service';
import { CompanyStorageService } from '../../../services/company-storage-service/company-storage.service';
import { getDocumentValidators } from '../../../validators/document-validator';
import { IntervalService } from '../../../services/interval-service/interval.service';
import { ConsultationService } from '../../../services/consultation-service/consultation.service';

@Component({
  selector: 'app-consultation-form-dialog',
  templateUrl: './consultation-form-dialog.component.html',
  styleUrls: ['./consultation-form-dialog.component.scss'],
})
export class ConsultationFormDialogComponent implements OnInit {
  consultationForm: FormGroup;
  consultationType = CONSULTATION_CONFIG.types;
  consultationInterval = CONSULTATION_CONFIG.intervals;
  documentLabel: string = 'CNPJ';
  loading = false;

  constructor(
    private _dialog: MatDialog,
    private _fb: FormBuilder,
    private _intervalService: IntervalService,
    private _consultationService: ConsultationService
  ) {
    this.consultationForm = this._fb.group({
      type: ['cnpj', [Validators.required]],
      interval: [null, [Validators.required, Validators.min(1)]],
      document: [null, [Validators.required]],
      referenceDate: [null, Validators.required],
    });

    this.consultationForm
      .get('type')
      ?.valueChanges.subscribe((selectedType) => {
        this.updateDocumentField(selectedType);
      });
  }

  ngOnInit(): void {
    this.updateDocumentField(this.consultationForm.get('type')?.value);

    this.consultationForm
      .get('type')
      ?.valueChanges.subscribe((selectedType) => {
        this.updateDocumentField(selectedType);
      });
  }

  updateDocumentField(type: string) {
    const documentControl = this.consultationForm.get('document');
    if (!documentControl) return;

    documentControl.setValidators(getDocumentValidators(type));
    this.documentLabel = type.toUpperCase();
    documentControl.updateValueAndValidity();
  }

  onIntervalChange() {
    const selectedInterval = this.consultationForm.get('interval')?.value;

    if (selectedInterval === 'custom') {
      this.openCustomIntervalDialog();
    }
  }

  openCustomIntervalDialog() {
    const dialogRef = this._dialog.open(ConsultationCustomIntervalComponent, {
      data: { interval: this.consultationForm.get('interval')?.value },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { interval, unit } = result;
        const displayLabel = `${interval} ${unit === 'day' ? 'dias' : unit === 'month' ? 'meses' : 'anos'}`;
        const convertedToDays = this._intervalService.convertToDays(result);

        const existingOption = this.consultationInterval.find(
          (option) => option.value === convertedToDays
        );

        if (!existingOption) {
          this.consultationInterval.push({
            key: `custom_${convertedToDays}`,
            labelKey: displayLabel,
            value: convertedToDays,
          });
        }

        this.consultationForm.patchValue({ interval: convertedToDays });
      }
    });
  }

  onSubmit() {
    this.loading = true;
    if (this.consultationForm.valid) {
      const formValue = this.consultationForm.value;
      this._consultationService.processForm(formValue, () => {
        this.loading = false;
      });
    } else {
      this.loading = false;
      console.log('Formulário inválido');
    }
  }
}
