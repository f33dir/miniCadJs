import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodviewwallComponent } from './rodviewwall.component';

describe('RodviewwallComponent', () => {
  let component: RodviewwallComponent;
  let fixture: ComponentFixture<RodviewwallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodviewwallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodviewwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
