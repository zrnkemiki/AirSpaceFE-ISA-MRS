import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentaCarReservationsComponent } from './my-renta-car-reservations.component';

describe('MyRentaCarReservationsComponent', () => {
  let component: MyRentaCarReservationsComponent;
  let fixture: ComponentFixture<MyRentaCarReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRentaCarReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRentaCarReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
