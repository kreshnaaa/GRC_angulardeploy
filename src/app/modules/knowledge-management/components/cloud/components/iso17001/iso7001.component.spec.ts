import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO7001Component } from './iso7001.component';

describe('ISO7001Component', () => {
  let component: ISO7001Component;
  let fixture: ComponentFixture<ISO7001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO7001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO7001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
