import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingContentforManagingtheclientportalComponent } from './training-contentfor-managingtheclientportal.component';

describe('TrainingContentforManagingtheclientportalComponent', () => {
  let component: TrainingContentforManagingtheclientportalComponent;
  let fixture: ComponentFixture<TrainingContentforManagingtheclientportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingContentforManagingtheclientportalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingContentforManagingtheclientportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
