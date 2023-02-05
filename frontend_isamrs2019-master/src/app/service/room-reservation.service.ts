import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateHotel } from '../model/date-hotel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReservationDTO } from '../model/reservation-DTO';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

    private reservationUrl = "http://localhost:8080/api/room-reservation/reserve-room";
    private reservationSource = new BehaviorSubject<DateHotel[]>([]);
    reservationsObservable = this.reservationSource.asObservable();
    private reservations = [];
  
    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  
  addReservation(reservationDTO : ReservationDTO) {
    this.http.post<ReservationDTO>(this.reservationUrl, reservationDTO)
      .subscribe(
        addedReservation =>{
          this.reservations.push(addedReservation);
          this.reservationSource.next(this.reservations);
         
        }
      )
      
    }
  
  deleteReservation(id){
    this.http.delete<DateHotel>("http://localhost:8080/api/room-reservation/" + id)
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
    this.http.get<DateHotel[]>("http://localhost:8080/api/room-reservation"+ "/get-reservation-user")
    .subscribe(rooms => {
      this.reservations = rooms;
      if (this.reservations.length > 0 ) {
         // this.toastr.success('Vase rezervacije su uspesno ucitane!');
      }
      else {
        this.toastr.warning('Nemate nijednu rezervaciju, rezervisete odmah')
      }
      this.reservationSource.next(this.reservations);
    });
  }  
    
  }
  