import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationFormDialogComponent } from './consultation-form-dialog.component';

describe('ConsultationFormDialogComponent', () => {
  let component: ConsultationFormDialogComponent;
  let fixture: ComponentFixture<ConsultationFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationFormDialogComponent],
    });
    fixture = TestBed.createComponent(ConsultationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
