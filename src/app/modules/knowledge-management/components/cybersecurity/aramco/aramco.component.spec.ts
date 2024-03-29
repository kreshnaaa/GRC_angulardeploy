import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARAMCOComponent } from './aramco.component';

describe('ARAMCOComponent', () => {
  let component: ARAMCOComponent;
  let fixture: ComponentFixture<ARAMCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARAMCOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ARAMCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
