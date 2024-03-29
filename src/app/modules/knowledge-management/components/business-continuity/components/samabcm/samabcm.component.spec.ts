import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAMABCMComponent } from './samabcm.component';

describe('SAMABCMComponent', () => {
  let component: SAMABCMComponent;
  let fixture: ComponentFixture<SAMABCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SAMABCMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SAMABCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
