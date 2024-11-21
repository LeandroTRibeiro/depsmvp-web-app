import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCustomIntervalComponent } from './consultation-custom-interval.component';

describe('ConsultationCustomIntervalComponent', () => {
  let component: ConsultationCustomIntervalComponent;
  let fixture: ComponentFixture<ConsultationCustomIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationCustomIntervalComponent],
    });
    fixture = TestBed.createComponent(ConsultationCustomIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
