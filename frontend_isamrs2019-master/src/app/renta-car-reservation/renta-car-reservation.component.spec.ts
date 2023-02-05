import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaCarReservationComponent } from './renta-car-reservation.component';

describe('RentaCarReservationComponent', () => {
  let component: RentaCarReservationComponent;
  let fixture: ComponentFixture<RentaCarReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaCarReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaCarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
