import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO9000Component } from './iso9000.component';

describe('ISO9000Component', () => {
  let component: ISO9000Component;
  let fixture: ComponentFixture<ISO9000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO9000Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO9000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
