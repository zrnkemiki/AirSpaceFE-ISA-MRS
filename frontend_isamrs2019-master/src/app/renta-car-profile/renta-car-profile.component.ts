import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { VehicleService } from '../services/vehicle.service';
import { RentacarForBackend } from '../model/rentacar-backend';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RentaCarService } from '../services/renta-car.service';

@Component({
  selector: 'app-renta-car-profile',
  templateUrl: './renta-car-profile.component.html',
  styleUrls: ['./renta-car-profile.component.css']
})
export class RentaCarProfileComponent implements OnInit {

  public rentaCar: RentacarForBackend;
  

  constructor(
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private rentaCarService: RentaCarService
  ) { 
    this.rentaCar = {   name: '',description: '', street: '', city: '', state: '',id: undefined, address: ''}  
  }

  ngOnInit() {
    this.getEditRentaCar();
  }

  getEditRentaCar(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.rentaCarService.getRentaCar(id).subscribe(rentaCar => this.rentaCar = rentaCar);
  }
    
   

  editRentaCar() {
    if (this.rentaCar.name !== '') {
      this.rentaCarService.editRentaCar(this.rentaCar);
      alert("Uspesno ste sacuvali kompaniju.")
      this.router.navigate(["/homepage"])
    }
    else {
      this.toastr.error('Morate uneti marku!');
    }


  }
}
