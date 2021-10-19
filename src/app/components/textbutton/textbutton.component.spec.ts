import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbuttonComponent } from './textbutton.component';

describe('TextbuttonComponent', () => {
  let component: TextbuttonComponent;
  let fixture: ComponentFixture<TextbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
