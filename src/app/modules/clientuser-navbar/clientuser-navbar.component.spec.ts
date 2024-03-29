import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientuserNavbarComponent } from './clientuser-navbar.component';

describe('ClientuserNavbarComponent', () => {
  let component: ClientuserNavbarComponent;
  let fixture: ComponentFixture<ClientuserNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientuserNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientuserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
