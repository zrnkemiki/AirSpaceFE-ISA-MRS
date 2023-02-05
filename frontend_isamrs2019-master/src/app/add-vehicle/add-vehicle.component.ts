import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VehicleBackEnd } from '../model/vehicle-back-end';
import { Vehicle } from '../model/vehicle';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  public vehicle: VehicleBackEnd;

  constructor(
    private vehicleService : VehicleService,
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.vehicle = { model: '', numOfSeats: 0 };
  }

  ngOnInit() {
     if(this.router.url != "/add-vehicle"){
      this.getEditVehicle();
     }
  }

  getEditVehicle(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(id).subscribe(vehicle => this.vehicle = vehicle);
  }

  addVehicle() {
    if (this.vehicle.model !== '') {
      if(this.router.url != "/add-vehicle"){
        this.vehicleService.editVehicle(this.vehicle);
      }
      else{
        this.vehicleService.addVehicle(this.vehicle);
      }
      
      this.allVehicles();
    }
    else {
      this.toastr.error('Morate uneti marku!');
    }
  }

  editVehicle() {
    if (this.vehicle.model !== '') {
      this.vehicleService.editVehicle(this.vehicle);
      this.allVehicles();
    }
    else {
      this.toastr.error('Morate uneti marku!');
    }
  }

  allVehicles() {
    this.router.navigate(["/vehiclesSED"]);
  }

}
