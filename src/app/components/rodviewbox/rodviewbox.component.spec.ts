import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodviewboxComponent } from './rodviewbox.component';

describe('RodviewboxComponent', () => {
  let component: RodviewboxComponent;
  let fixture: ComponentFixture<RodviewboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodviewboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodviewboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
