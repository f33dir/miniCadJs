import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodviewComponent } from './rodview.component';

describe('RodviewComponent', () => {
  let component: RodviewComponent;
  let fixture: ComponentFixture<RodviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
