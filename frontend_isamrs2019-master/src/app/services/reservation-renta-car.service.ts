import { Injectable } from '@angular/core';
import { dateRentaCar} from '../model/dateRentaCar';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
//import { disableBindings } from '@angular/core/src/render3';
import { ReservationDTO } from '../model/reservation-DTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReservationRentaCarService {
  private reservationUrl = "http://localhost:8080/api/reservationRentaCar";
  private reservationSource = new BehaviorSubject<dateRentaCar[]>([]);
  reservationsObservable = this.reservationSource.asObservable();
  private reservations = [];

  constructor(private http: HttpClient, private router: Router) { }

addReservation(dateRentaCar : ReservationDTO) {
  this.http.post<dateRentaCar>(this.reservationUrl, dateRentaCar)
    .subscribe(
      addedReservation =>{
        this.reservations.push(addedReservation);
        this.reservationSource.next(this.reservations);
        alert("You have successfully reserved new vehicle. New reservation from " + dateRentaCar.dateFrom + "until" +  dateRentaCar.dateUntil + " saved!.");
        this.router.navigate(["/my-renta-car-reservations"])
      }
    )
    
  }

deleteReservation(id){
  this.http.delete<dateRentaCar>(this.reservationUrl + "/" + id)
    .subscribe(
      response =>{
        for (var i = 0; i < this.reservations.length; i++){
          if (id === this.reservations[i].id){
            this.reservations.splice(i, 1);
            this.reservationSource.next(this.reservations);
            return;
          }
        }
      }
    )
  }

getReservations(){
  this.http.get<dateRentaCar[]>(this.reservationUrl + "/getReservationByUser")
  .subscribe(vehicles => {
    this.reservations = vehicles;
    this.reservationSource.next(this.reservations);
  });
}

getReservationsReport(dateFrom, dateUntil, rentaCarId){
  this.http.get<dateRentaCar[]>(this.reservationUrl + "/getReservationReport" + "/" + dateFrom + "/" + dateUntil + "/" + rentaCarId)
  .subscribe(vehicles => {
    this.reservations = vehicles;
    this.reservationSource.next(this.reservations);
  });
}

getReservationsIncome(dateFrom, dateUntil, rentaCarId){
  this.http.get<Number>(this.reservationUrl + "/getReservationReportIncome" + "/" + dateFrom + "/" + dateUntil + "/" + rentaCarId)
  .subscribe()};

  
}
