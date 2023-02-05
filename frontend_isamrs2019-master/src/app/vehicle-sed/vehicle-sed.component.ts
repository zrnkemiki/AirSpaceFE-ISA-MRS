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
import { ReservationDTO } from '../model/reservation-DTO';
//import { disableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-vehicle-sed',
  templateUrl: './vehicle-sed.component.html',
  styleUrls: ['./vehicle-sed.component.css']
})
export class VehicleSEDComponent implements OnInit {

  public vehicles: Vehicle[];
  
  public searchParam: string;
  public hotelName:string;
  public rentaCarID: number;
  public dateFrom: string;
  public dateUntil: string;
  public numberOfSeats: string;
  public city: string;


  public rentaCarAdmin: User;  
  public registeredUser: User;

  public broj: number;



  constructor(
    private http: HttpClient, 
    private router: Router,
    private vehicleService : VehicleService,
    private route: ActivatedRoute,
    private loginService : LoginService,
    private reservationService: ReservationRentaCarService
    ) 
    {
    }

  ngOnInit() {
    const currentUser: User = this.loginService.currentUserValue;
    if(currentUser == null){
      alert("Mozete pregledati vozila ali se morate registrovati odnosno ulogovati kako bi rezervisali.")
    }
    else if(currentUser.userType == "RENTACAR_ADMIN"){
      this.rentaCarAdmin = currentUser;
    }
    else if(currentUser.userType == "REGISTERED_USER"){
      this.registeredUser = currentUser;
    }


    this.vehicles = [];
    this.hotelName = this.route.snapshot.paramMap.get('hotelName');
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateUntil = this.route.snapshot.paramMap.get('dateUntil');

    if(this.router.url === "/vehiclesSED"){
      this.getVehicles();
    }
    else if(this.router.url === "/vehiclesSED/" + this.dateFrom + "/" + this.dateUntil + "/" + this.hotelName){
      this.getVehiclesByHotel();
    }
    else {      
      this.getVehiclesByDate();
    }    
  }
  
  reserveVehicle(id : number){
    let reservation : ReservationDTO= { 
      dateFrom: this.route.snapshot.paramMap.get('dateFrom'),
      dateUntil: this.route.snapshot.paramMap.get('dateUntil'),
      vehicleId: id,
      roomId: 0
    };
    this.reservationService.addReservation(reservation);
    
  } 
  addVehicle(){    
    this.router.navigate(["/add-vehicle"]);
  }

  searchVehicleModel(searchParam){
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.searchVehiclesModel(searchParam);
  }

  searchVehicleGearBox(searchParam){
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.searchVehiclesGearBox(searchParam);
  }

  deleteVehicle(id){
    this.vehicleService.deleteVehicle(id);
    
  }

  editVehicle(id){
    this.router.navigate(["/edit-vehicle/"+id]);
  }
  

  getVehicles(){
    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.findAll();
  }

  getVehiclesByHotel(){

    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.findVehiclesByHotelName(this.dateFrom, this.dateUntil, this.hotelName);

    var date1 = new Date (this.dateFrom);
    var date2 = new Date (this.dateUntil);

    var diff = Math.abs(date1.getTime() - date2.getTime());
    this.broj = Math.ceil(diff / (1000 * 3600 * 24)); 
  };
  
  getVehiclesByDate(){  
    this.rentaCarID = +this.route.snapshot.paramMap.get('id');
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateUntil = this.route.snapshot.paramMap.get('dateUntil');
    this.city = this.route.snapshot.paramMap.get('city')
    this.numberOfSeats = this.route.snapshot.paramMap.get('numberOfSeats')

    this.vehicleService.vehiclesObservable.subscribe( vehicles => this.vehicles = vehicles);
    this.vehicleService.findVehiclesByRentaCarId(this.dateFrom, this.dateUntil,this.numberOfSeats,this.city, this.rentaCarID);

    var date1 = new Date (this.dateFrom);
    var date2 = new Date (this.dateUntil);

    var diff = Math.abs(date1.getTime() - date2.getTime());
    this.broj = Math.ceil(diff / (1000 * 3600 * 24)); 
  
  }

  
}
