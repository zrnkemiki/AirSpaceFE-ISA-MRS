import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaCarReservationSEDComponent } from './renta-car-reservation-sed.component';

describe('RentaCarReservationSEDComponent', () => {
  let component: RentaCarReservationSEDComponent;
  let fixture: ComponentFixture<RentaCarReservationSEDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaCarReservationSEDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaCarReservationSEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
