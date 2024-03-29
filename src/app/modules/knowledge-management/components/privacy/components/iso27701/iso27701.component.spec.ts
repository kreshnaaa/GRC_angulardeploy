import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO27701Component } from './iso27701.component';

describe('ISO27701Component', () => {
  let component: ISO27701Component;
  let fixture: ComponentFixture<ISO27701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO27701Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO27701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
