import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {CONSULTATION_CONFIG} from "./consultation-form-dialog-config";
import {MatDialog} from "@angular/material/dialog";
import {
  ConsultationCustomIntervalComponent
} from "../consultation-custom-interval/consultation-custom-interval.component";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

}
@Component({
  selector: 'app-consultation-form-dialog',
  templateUrl: './consultation-form-dialog.component.html',
  styleUrls: ['./consultation-form-dialog.component.scss']
})
export class ConsultationFormDialogComponent {

  consultationType = CONSULTATION_CONFIG.types;
  consultationInterval = CONSULTATION_CONFIG.intervals;
  selectedType = this.consultationType[0].key;
  selectedInterval = this.consultationInterval[0].key;
  selectedIntervalValue: number | string | null = null;

  cpfFormControl = new FormControl();
  matcher = new MyErrorStateMatcher();

  constructor(private _dialog: MatDialog) {}

  onIntervalChange() {
    const selectedInterval = this.consultationInterval.find(interval => interval.key === this.selectedInterval);

    if (selectedInterval && selectedInterval.key === 'custom') {
      this.openCustomIntervalDialog();
    } else {
      this.selectedIntervalValue = selectedInterval ? selectedInterval.value : null;
    }
  }

  openCustomIntervalDialog() {
    const dialogRef = this._dialog.open(ConsultationCustomIntervalComponent, {
      data: { interval: this.selectedIntervalValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.selectedIntervalValue = result;
      }
    });
  }
}
