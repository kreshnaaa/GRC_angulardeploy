import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectsManagementComponent } from './prospects-management.component';

describe('ProspectsManagementComponent', () => {
  let component: ProspectsManagementComponent;
  let fixture: ComponentFixture<ProspectsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProspectsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
