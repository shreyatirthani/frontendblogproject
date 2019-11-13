import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscribe11Component } from './subscribe11.component';

describe('Subscribe11Component', () => {
  let component: Subscribe11Component;
  let fixture: ComponentFixture<Subscribe11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subscribe11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subscribe11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
