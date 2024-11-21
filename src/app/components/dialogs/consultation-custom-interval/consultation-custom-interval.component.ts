import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-consultation-custom-interval',
  templateUrl: './consultation-custom-interval.component.html',
  styleUrls: ['./consultation-custom-interval.component.scss'],
})
export class ConsultationCustomIntervalComponent {
  customIntervalForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ConsultationCustomIntervalComponent>,
    private fb: FormBuilder
  ) {
    this.customIntervalForm = this.fb.group({
      interval: [null, [Validators.required, Validators.min(1)]],
      unit: ['ano', Validators.required],
    });
  }

  onSubmit() {
    if (this.customIntervalForm.valid) {
      const data = this.customIntervalForm.value;
      this.dialogRef.close(data);
    }
  }
}
