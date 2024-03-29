import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISO27KComponent } from './iso27-k.component';

describe('ISO27KComponent', () => {
  let component: ISO27KComponent;
  let fixture: ComponentFixture<ISO27KComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ISO27KComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ISO27KComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
