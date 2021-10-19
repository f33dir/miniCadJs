import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextdropdownComponent } from './textdropdown.component';

describe('TextdropdownComponent', () => {
  let component: TextdropdownComponent;
  let fixture: ComponentFixture<TextdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
