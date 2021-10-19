import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListElementComponent } from './segment-list-element.component';

describe('SegmentListElementComponent', () => {
  let component: SegmentListElementComponent;
  let fixture: ComponentFixture<SegmentListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
