import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KriandkpiComponent } from './kriandkpi.component';

describe('KriandkpiComponent', () => {
  let component: KriandkpiComponent;
  let fixture: ComponentFixture<KriandkpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KriandkpiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KriandkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
