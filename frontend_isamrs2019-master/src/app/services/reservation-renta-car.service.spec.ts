import { TestBed } from '@angular/core/testing';

import { ReservationRentaCarService } from './reservation-renta-car.service';

describe('ReservationRentaCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationRentaCarService = TestBed.get(ReservationRentaCarService);
    expect(service).toBeTruthy();
  });
});
