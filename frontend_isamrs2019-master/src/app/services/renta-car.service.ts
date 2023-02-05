import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isNumber } from 'util';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { VehicleService } from '../services/vehicle.service';
import { RentacarForBackend } from '../model/rentacar-backend';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentaCarService {

  private rentaCarUrl = "http://localhost:8080/api/rentacar";
  private rentaCarSource = new BehaviorSubject<RentacarForBackend[]>([]);
  rentaCarObservable = this.rentaCarSource.asObservable();
  private rentaCars = [];

  constructor(private http: HttpClient) { }

  getRentaCar(id){
    return this.http.get<RentacarForBackend>(this.rentaCarUrl + "/" + id)
    .pipe(tap(
      rentaCar =>{
        for (var i = 0; i < this.rentaCars.length; i++){
          if (rentaCar.id === this.rentaCars[i].id){
            this.rentaCars[i] = rentaCar;
            this.rentaCarSource.next(this.rentaCars);
            return rentaCar;
          }
        }
      })
    )
  }

  editRentaCar(rentaCar){
    this.http.put<RentacarForBackend>(this.rentaCarUrl, rentaCar)
    .subscribe( editedRentaCar=>{
      for (var i = 0; i < this.rentaCars.length; i++){;
        if (editedRentaCar.id === this.rentaCars[i].id){
          this.rentaCars[i] = editedRentaCar;
          this.rentaCarSource.next(this.rentaCars);
          return;
        }
      }
    });
  }

}
