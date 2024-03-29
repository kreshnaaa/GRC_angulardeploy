import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCM22301Component } from './bcm22301.component';

describe('BCM22301Component', () => {
  let component: BCM22301Component;
  let fixture: ComponentFixture<BCM22301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BCM22301Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BCM22301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
