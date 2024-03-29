import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalauditreportComponent } from './internalauditreport.component';

describe('InternalauditreportComponent', () => {
  let component: InternalauditreportComponent;
  let fixture: ComponentFixture<InternalauditreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalauditreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalauditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
