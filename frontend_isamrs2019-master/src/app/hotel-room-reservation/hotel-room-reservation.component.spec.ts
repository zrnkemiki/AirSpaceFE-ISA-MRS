import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomReservationComponent } from './hotel-room-reservation.component';

describe('HotelRoomReservationComponent', () => {
  let component: HotelRoomReservationComponent;
  let fixture: ComponentFixture<HotelRoomReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRoomReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
