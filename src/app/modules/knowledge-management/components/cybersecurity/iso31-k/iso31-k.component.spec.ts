import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO31KComponent } from './iso31-k.component';

describe('ISO31KComponent', () => {
  let component: ISO31KComponent;
  let fixture: ComponentFixture<ISO31KComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO31KComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO31KComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
