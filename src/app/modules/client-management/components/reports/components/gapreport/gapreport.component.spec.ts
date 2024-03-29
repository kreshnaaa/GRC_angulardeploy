import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GapreportComponent } from './gapreport.component';

describe('GapreportComponent', () => {
  let component: GapreportComponent;
  let fixture: ComponentFixture<GapreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GapreportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GapreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
