import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotelReservationsComponent } from './my-hotel-reservations.component';

describe('MyHotelReservationsComponent', () => {
  let component: MyHotelReservationsComponent;
  let fixture: ComponentFixture<MyHotelReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHotelReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHotelReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
