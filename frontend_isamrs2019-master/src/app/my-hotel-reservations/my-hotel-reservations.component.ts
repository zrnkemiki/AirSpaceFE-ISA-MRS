import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DateHotel } from '../model/date-hotel';
import { RoomReservationService } from '../service/room-reservation.service';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-hotel-reservations',
  templateUrl: './my-hotel-reservations.component.html',
  styleUrls: ['./my-hotel-reservations.component.css']
})
export class MyHotelReservationsComponent implements OnInit {

  
  
    reservations: DateHotel[];
    relativeUrlCancel: string;
  
    constructor( private http: HttpClient, private router: Router, private reservationService: RoomReservationService,
       private service: GenericService, private toastr: ToastrService ) {
      this.relativeUrlCancel = '/room-reservation'
     }
  
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
        this.toastr.warning("Ova rezervacija je prosla!")
      }
      else if(currentDateTemp >= date){
        this.toastr.warning("Rok za otkazivanje je prosao. Rezervaciju morate otkazati najmanje 48h unapred.")
      }
      else{
          this.service.delete(this.relativeUrlCancel, id).subscribe(
            (success: boolean) => {
              if (success) {
                  this.toastr.success('Reservacija je uspesno otkazana!');
                 this.getReservations();
                }
              else {
                  this.toastr.warning('Reservacija nije otkazana, doslo je do problema na serveru!');
                }
              },     
            error => console.log('Error: ' + JSON.stringify(error))
          );
        }
      
    }
  
  
    getReservations(){
      this.reservationService.reservationsObservable.subscribe( reservations => this.reservations = reservations);
      this.reservationService.getReservations();
    }
  }
  