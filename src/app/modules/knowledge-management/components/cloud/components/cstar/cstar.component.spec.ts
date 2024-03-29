import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSTARComponent } from './cstar.component';

describe('CSTARComponent', () => {
  let component: CSTARComponent;
  let fixture: ComponentFixture<CSTARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSTARComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSTARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
