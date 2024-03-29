import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminNavbarComponent } from './client-admin-navbar.component';

describe('ClientAdminNavbarComponent', () => {
  let component: ClientAdminNavbarComponent;
  let fixture: ComponentFixture<ClientAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAdminNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
