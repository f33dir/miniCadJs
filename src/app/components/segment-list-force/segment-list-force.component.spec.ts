import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListForceComponent } from './segment-list-force.component';

describe('SegmentListForceComponent', () => {
  let component: SegmentListForceComponent;
  let fixture: ComponentFixture<SegmentListForceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentListForceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
