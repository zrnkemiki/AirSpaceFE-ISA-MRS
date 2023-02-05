import { Component, OnInit } from '@angular/core';
import { AdminBackend } from '../model/admin-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  userTypes: string[] = ['SYS_ADMIN', 'RENTACAR_ADMIN', 'HOTEL_ADMIN', 'AIRLINE_ADMIN'];
  admin: AdminBackend;
  hotelNames: string[];
  airlineNames: string[];
  rentacarNames: string[];
  data: string[];

  relativeUrlHotel: string;
  relativeUrlAirline: string;
  relativeUrlRentacar: string;
  relativeUrl: string;



  constructor(private genericService: GenericService, private toastr: ToastrService) {
    this.relativeUrlAirline = "/sys_admin/get_airline_names";
    this.relativeUrlHotel = "/sys_admin/get_hotel_names";
    this.relativeUrlRentacar = "/sys_admin/get_rentacar_names";
    this.relativeUrl = "/sys_admin/add_admin";
    this.admin = {username: '',email: '', userType: '', companyName: ''};
    this.data = [];
  }

  ngOnInit() {
    this.getRentacarNames();
    this.getAirlineNames();
    this.getHotelNames();

   

  }

  getHotelNames(){
    this.genericService.getAll(this.relativeUrlHotel).subscribe(
    (hotelNames: string[]) => { 
      this.hotelNames = hotelNames;
    if (this.hotelNames) {
      if (this.hotelNames.length > 0) {  
      }
      else {
        this.toastr.warning('There are no hotels at the moment!');
      }
    }
    else {
      this.toastr.error('Problem with loading of hotels!');
    }
  },
    )
};

getAirlineNames(){
  this.genericService.getAll(this.relativeUrlAirline).subscribe(
  (airlineNames: string[]) => { 
    this.airlineNames = airlineNames;
  if (this.airlineNames) {
    if (this.airlineNames.length > 0) {  
    }
    else {
      this.toastr.warning('There are no airlines at the moment!');
    }
  }
  else {
    this.toastr.error('Problem with loading of airlines!');
  }
},
  )
};

getRentacarNames(){
  this.genericService.getAll(this.relativeUrlRentacar).subscribe(
  (rentacarNames: string[]) => { 
    this.rentacarNames = rentacarNames;
  if (this.rentacarNames) {
    if (this.rentacarNames.length > 0) {  
    }
    else {
      this.toastr.warning('There are no rent-a-car services at the moment!');
    }
  }
  else {
    this.toastr.error('Problem with loading of rent-a-car services!');
  }
},
  )
};



onUserTypeChange(userType: string) {
  if (userType === "SYS_ADMIN") this.data = null;
  else if (userType === "RENTACAR_ADMIN") this.data = this.rentacarNames;
  else   if (userType === "HOTEL_ADMIN") this.data = this.hotelNames;
  else if (userType === "AIRLINE_ADMIN") this.data = this.airlineNames;
  else this.data = null;

}
save() {
  let stopAdding: boolean = false;

  if (!this.admin.username || this.admin.username === '') {
    this.toastr.error('Username is empty!');
    stopAdding = true;
  }
  if (!this.admin.email){
    this.toastr.error('Email is invalid!');
    stopAdding = true;
  }
  if (this.admin.email === '') {
    this.toastr.error('Email is empty!');
    stopAdding = true;
  }
  if (!this.admin.userType || this.admin.userType === '') {
    this.toastr.error('usertype is empty!');
    stopAdding = true;
  }
  if ((!this.admin.companyName || this.admin.companyName === '') && this.admin.userType!=="SYS_ADMIN") {
    this.toastr.error('Company name is empty!');
    stopAdding = true;
  }
  if (stopAdding) {
    return;
  }

  this.genericService.save(this.relativeUrl, this.admin).subscribe(
    (retValue: boolean) => {
      if (retValue) {
        this.toastr.success('You have successfully added an admin!');
      }
      else {
        this.toastr.error('Admin name already exists, try again!');
      }
    },
    () => this.toastr.error('You have unsuccessfully added an admin!')
  );

  }

}
