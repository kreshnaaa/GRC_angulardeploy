import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCIDSSIComponent } from './pcidssi.component';

describe('PCIDSSIComponent', () => {
  let component: PCIDSSIComponent;
  let fixture: ComponentFixture<PCIDSSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PCIDSSIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PCIDSSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
