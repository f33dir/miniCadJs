import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListWallComponent } from './segment-list-wall.component';

describe('SegmentListWallComponent', () => {
  let component: SegmentListWallComponent;
  let fixture: ComponentFixture<SegmentListWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentListWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
