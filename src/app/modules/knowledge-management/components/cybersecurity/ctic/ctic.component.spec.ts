import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTICComponent } from './ctic.component';

describe('CTICComponent', () => {
  let component: CTICComponent;
  let fixture: ComponentFixture<CTICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTICComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CTICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
