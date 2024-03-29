import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO14KComponent } from './iso14-k.component';

describe('ISO14KComponent', () => {
  let component: ISO14KComponent;
  let fixture: ComponentFixture<ISO14KComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO14KComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO14KComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
