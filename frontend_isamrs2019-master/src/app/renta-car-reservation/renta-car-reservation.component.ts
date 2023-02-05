import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../model/vehicle';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { VehicleService } from '../services/vehicle.service';
import { dateRentaCar } from '../model/dateRentaCar';
import { VehicleSEDComponent } from '../vehicle-sed/vehicle-sed.component';

@Component({
  selector: 'app-renta-car-reservation',
  templateUrl: './renta-car-reservation.component.html',
  styleUrls: ['./renta-car-reservation.component.css']
})
export class RentaCarReservationComponent implements OnInit {
    public dateReservation: dateRentaCar;
    public id: number;

  constructor(
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute, 
  ) { 
    this.dateReservation = {id: '', dateFrom: '', dateUntil: '', numberOfSeats: '1', vehicleId:'', city:'', totalPrice:undefined};
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  checkDate(){

    let dateFrom: Date = new Date(this.dateReservation.dateFrom);
    let dateUntil:  Date = new Date(this.dateReservation.dateUntil);
    let currentDate: Date = new Date();  

    if(dateFrom < currentDate){
      alert("Molimo unesite datum u buducnosti!")
    }
    else if(dateUntil < dateFrom){
      alert("Datum vracanja vozila mora da buden posle datuma preuzimanja!")
    }
    else if(this.dateReservation.city === ''){      
      this.router.navigate(["/vehiclesSED/" + this.dateReservation.dateFrom +"/" + this.dateReservation.dateUntil +"/" + this.dateReservation.numberOfSeats + "/" + this.id]);
    }
    else{
      this.router.navigate(["/vehiclesSED/" + this.dateReservation.dateFrom +"/" + this.dateReservation.dateUntil +"/" + this.dateReservation.numberOfSeats + "/" + this.dateReservation.city + "/" +  this.id]);
    }
    //this.vehicleSED.getVehiclesByDate(this.dateReservation.dateFrom, this.dateReservation.dateUntil, this.id);
  }


}
