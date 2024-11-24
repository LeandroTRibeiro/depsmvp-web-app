import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConsultationsComponent } from './no-consultations.component';

describe('NoConsultationsComponent', () => {
  let component: NoConsultationsComponent;
  let fixture: ComponentFixture<NoConsultationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoConsultationsComponent]
    });
    fixture = TestBed.createComponent(NoConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
