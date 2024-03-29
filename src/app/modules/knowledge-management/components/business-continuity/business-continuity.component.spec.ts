import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessContinuityComponent } from './business-continuity.component';

describe('BusinessContinuityComponent', () => {
  let component: BusinessContinuityComponent;
  let fixture: ComponentFixture<BusinessContinuityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessContinuityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessContinuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
