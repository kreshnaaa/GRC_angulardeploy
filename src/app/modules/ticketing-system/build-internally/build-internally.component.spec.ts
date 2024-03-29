import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInternallyComponent } from './build-internally.component';

describe('BuildInternallyComponent', () => {
  let component: BuildInternallyComponent;
  let fixture: ComponentFixture<BuildInternallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildInternallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildInternallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
