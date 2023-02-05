import { Component, OnInit } from '@angular/core';
import { dateRentaCar } from '../model/dateRentaCar';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservationRentaCarService } from '../services/reservation-renta-car.service';

@Component({
  selector: 'app-renta-car-report',
  templateUrl: './renta-car-report.component.html',
  styleUrls: ['./renta-car-report.component.css']
})
export class RentaCarReportComponent implements OnInit {

  public dateReservation: dateRentaCar;
   public id: number;
   public totalMoney: number;

  constructor(
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute,  
    private reservationService: ReservationRentaCarService 
  ) {
    this.dateReservation = {id: '', dateFrom: '', dateUntil: '', numberOfSeats: '', vehicleId:'', city:'', totalPrice:undefined};
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  checkDate(){
    this.router.navigate(["/rentaCarReservationSED/" + this.dateReservation.dateFrom +"/" + this.dateReservation.dateUntil +"/" + this.id]);
  }


}
