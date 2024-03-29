import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliancePeriodsComponent } from './compliance-periods.component';

describe('CompliancePeriodsComponent', () => {
  let component: CompliancePeriodsComponent;
  let fixture: ComponentFixture<CompliancePeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompliancePeriodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompliancePeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
