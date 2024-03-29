import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO18001Component } from './iso18001.component';

describe('ISO18001Component', () => {
  let component: ISO18001Component;
  let fixture: ComponentFixture<ISO18001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO18001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO18001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
