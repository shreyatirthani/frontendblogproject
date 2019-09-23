import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartsComponent } from './user-carts.component';

describe('UserCartsComponent', () => {
  let component: UserCartsComponent;
  let fixture: ComponentFixture<UserCartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
