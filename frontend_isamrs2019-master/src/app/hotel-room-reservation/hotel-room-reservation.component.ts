import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomQuery } from '../model/room-query';

@Component({
  selector: 'app-hotel-room-reservation',
  templateUrl: './hotel-room-reservation.component.html',
  styleUrls: ['./hotel-room-reservation.component.css']
})
export class HotelRoomReservationComponent implements OnInit {

    roomQuery: RoomQuery;
    hotelName: string;


  constructor( private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { 
    this.roomQuery = {hotelName: '', dateFrom: '', dateUntil: '', numberOfBeds: 0, roomId:''};
  }

  ngOnInit() {
    this.hotelName = this.route.snapshot.paramMap.get('hotelName');
  }

  checkDate(){
    let stopAdding: boolean = false;

    if (!this.roomQuery.dateFrom || this.roomQuery.dateFrom === '') {
      this.toastr.error('Pocetni datum je prazan!');
      stopAdding = true;
    }
    if (!this.roomQuery.dateUntil || this.roomQuery.dateUntil === '') {
      this.toastr.error('Krajnji datum je prazan!');
      stopAdding = true;
    }
    if (!this.roomQuery.numberOfBeds || this.roomQuery.numberOfBeds === 0) {
      this.toastr.error('Broj kreveta je prazan!');
      stopAdding = true;
    }
    if (this.roomQuery.numberOfBeds > 8) {
      this.toastr.error('Maksimalan broj kreveta je 8!');
      stopAdding = true;
    }
    if (stopAdding) {
      return;
    }

    let dateFrom: Date = new Date(this.roomQuery.dateFrom);
    let dateUntil:  Date = new Date(this.roomQuery.dateUntil);
    let currentDate: Date = new Date();  

    if(dateFrom < currentDate){
      this.toastr.error("Molimo unesite datum u buducnosti!")
    }
    else if(dateUntil < dateFrom){
      this.toastr.error("Pocetni datum mora biti pre datuma zavrsetka boravka!")
    }
    else{      
      this.router.navigate(["show-rooms/" + this.hotelName  + "/" + this.roomQuery.dateFrom +"/" + this.roomQuery.dateUntil +"/" + this.roomQuery.numberOfBeds]);
    }
  }


}
