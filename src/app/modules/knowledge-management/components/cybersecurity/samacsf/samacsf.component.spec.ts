import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAMACSFComponent } from './samacsf.component';

describe('SAMACSFComponent', () => {
  let component: SAMACSFComponent;
  let fixture: ComponentFixture<SAMACSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SAMACSFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SAMACSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
