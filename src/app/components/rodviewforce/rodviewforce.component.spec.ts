import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodviewforceComponent } from './rodviewforce.component';

describe('RodviewforceComponent', () => {
  let component: RodviewforceComponent;
  let fixture: ComponentFixture<RodviewforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodviewforceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodviewforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
