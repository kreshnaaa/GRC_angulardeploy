import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofURLfortheabovegovernanceareasComponent } from './listof-urlfortheabovegovernanceareas.component';

describe('ListofURLfortheabovegovernanceareasComponent', () => {
  let component: ListofURLfortheabovegovernanceareasComponent;
  let fixture: ComponentFixture<ListofURLfortheabovegovernanceareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListofURLfortheabovegovernanceareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListofURLfortheabovegovernanceareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
