import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { VehicleService } from '../services/vehicle.service';
import { dateRentaCar } from '../model/dateRentaCar';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';
import { RentaCarReservationComponent } from '../renta-car-reservation/renta-car-reservation.component';
import { ReservationRentaCarService } from '../services/reservation-renta-car.service';

@Component({
  selector: 'app-renta-car-reservation-sed',
  templateUrl: './renta-car-reservation-sed.component.html',
  styleUrls: ['./renta-car-reservation-sed.component.css']
})
export class RentaCarReservationSEDComponent implements OnInit {

  public reservations: dateRentaCar[];
  public rentaCarID: number;
  public dateFrom: string;
  public dateUntil: string;
  public totalMoney: Number;
  

  constructor(
    private http: HttpClient, 
    private router: Router,
    private vehicleService : VehicleService,
    private route: ActivatedRoute,
    private loginService : LoginService,
    private reservationService: ReservationRentaCarService
  ) { }

  ngOnInit() {
    this.reservations = [];
    this.rentaCarID = +this.route.snapshot.paramMap.get('hotelId');
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateUntil = this.route.snapshot.paramMap.get('dateUntil');
    this.getReservationsReport()
    }

  getReservationsReport(){
    this.reservationService.reservationsObservable.subscribe( reservations => this.reservations = reservations);
    this.reservationService.getReservationsReport(this.dateFrom, this.dateUntil, this.rentaCarID);
    
  }

  deleteReservation(id){
    this.reservationService.deleteReservation(id);
    alert("Uspesno ste obrisali rezervaciju.");
  }

}
