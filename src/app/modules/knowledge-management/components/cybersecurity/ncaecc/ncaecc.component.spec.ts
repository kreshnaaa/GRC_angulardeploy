import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCAECCComponent } from './ncaecc.component';

describe('NCAECCComponent', () => {
  let component: NCAECCComponent;
  let fixture: ComponentFixture<NCAECCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NCAECCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NCAECCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
