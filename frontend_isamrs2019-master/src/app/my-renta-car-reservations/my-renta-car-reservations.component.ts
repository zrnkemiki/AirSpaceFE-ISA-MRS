import { Component, OnInit } from '@angular/core';
import { dateRentaCar } from '../model/dateRentaCar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { ReservationRentaCarService } from '../services/reservation-renta-car.service';

@Component({
  selector: 'app-my-renta-car-reservations',
  templateUrl: './my-renta-car-reservations.component.html',
  styleUrls: ['./my-renta-car-reservations.component.css']
})
export class MyRentaCarReservationsComponent implements OnInit {

  public reservations: dateRentaCar[];

  constructor(
  private http: HttpClient, 
  private router: Router,
  private reservationService: ReservationRentaCarService 
  ) { }

  ngOnInit() {
    this.reservations = [];
    this.getReservations();
  }

  cancelReservation(id, dateFrom){
    let date: Date = new Date(dateFrom);
    let currentDate: Date = new Date();
    let currentDateTemp: Date = new Date();

    currentDateTemp.setDate(currentDateTemp.getDate() + 2);

    if(date < currentDate){
      alert("Ova rezervacija je prosla!")
    }
    else if(currentDateTemp >= date){
      alert("Rok za otkazivanje je prosao. Rezervaciju morate otkazati najmanje 48h unapred.")
    }
    else{
      this.reservationService.deleteReservation(id);
      alert("Uspesno ste obrisali rezervaciju od" + date);
    }
    
  }


  getReservations(){
    this.reservationService.reservationsObservable.subscribe( reservations => this.reservations = reservations);
    this.reservationService.getReservations();
  }
}
