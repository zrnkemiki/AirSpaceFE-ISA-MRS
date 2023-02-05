import { TestBed } from '@angular/core/testing';

import { RoomReservationService } from './room-reservation.service';

describe('RoomReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomReservationService = TestBed.get(RoomReservationService);
    expect(service).toBeTruthy();
  });
});
