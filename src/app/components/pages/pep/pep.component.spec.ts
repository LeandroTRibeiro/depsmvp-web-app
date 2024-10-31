import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepComponent } from './pep.component';

describe('PepComponent', () => {
  let component: PepComponent;
  let fixture: ComponentFixture<PepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PepComponent]
    });
    fixture = TestBed.createComponent(PepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
