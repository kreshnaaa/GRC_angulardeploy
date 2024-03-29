import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOffboardingComponent } from './client-offboarding.component';

describe('ClientOffboardingComponent', () => {
  let component: ClientOffboardingComponent;
  let fixture: ComponentFixture<ClientOffboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientOffboardingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientOffboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
