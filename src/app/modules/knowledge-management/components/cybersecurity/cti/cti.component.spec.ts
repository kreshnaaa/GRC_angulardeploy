import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTIComponent } from './cti.component';

describe('CTIComponent', () => {
  let component: CTIComponent;
  let fixture: ComponentFixture<CTIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
