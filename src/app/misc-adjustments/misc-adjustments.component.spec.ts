import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscAdjustmentsComponent } from './misc-adjustments.component';

describe('MiscAdjustmentsComponent', () => {
  let component: MiscAdjustmentsComponent;
  let fixture: ComponentFixture<MiscAdjustmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscAdjustmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
