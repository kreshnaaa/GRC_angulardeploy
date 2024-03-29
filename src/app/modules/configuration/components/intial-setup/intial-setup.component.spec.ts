import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntialSetupComponent } from './intial-setup.component';

describe('IntialSetupComponent', () => {
  let component: IntialSetupComponent;
  let fixture: ComponentFixture<IntialSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntialSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntialSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
