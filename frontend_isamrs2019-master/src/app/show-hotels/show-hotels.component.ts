import { Component, OnInit } from '@angular/core';
import { HotelForBackend } from '../model/hotel-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-hotels',
  templateUrl: './show-hotels.component.html',
  styleUrls: ['./show-hotels.component.css']
})
export class ShowHotelsComponent implements OnInit {

  hotels: HotelForBackend[];
  relativeUrlForHotels: string;
  relativeUrlForRooms: string;
  relativeURLSearch: string;
  relativeURLSearchCity: string;
  searchParam: string;


  


  constructor(private genericService: GenericService, private toastr: ToastrService, private router: Router){
      this.relativeUrlForHotels = '/sys_admin/get_hotels';
      this.relativeUrlForRooms = '/sys_admin/get_rooms';
      this.relativeURLSearch = '/sys_admin/search_by_name';
      this.relativeURLSearchCity = '/sys_admin/search_by_city';
      this.hotels = [];

  }
  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.genericService.getAll(this.relativeUrlForHotels).subscribe(
    (hotels: HotelForBackend[]) => {
      this.hotels = hotels;
      if (this.hotels) {
      }
      else {
        this.toastr.error('Problem with loading of hotels!');
      }
  },
  error => console.log('Error: ' + JSON.stringify(error))
);

  }

  searchHotels(){
    if (this.searchParam!=='' && this.searchParam !== undefined){
      return this.genericService.search(this.relativeURLSearch, this.searchParam).subscribe(
      (list: HotelForBackend[])=>{
        this.hotels = list;
        if (this.hotels) {
          if (!(this.hotels.length > 0)){              
            this.toastr.warning('No hotel matches given parameters!');
            error => console.log('Error: ' + JSON.stringify(error))
        }
      }
    }
    );
  }
  else {
    this.toastr.warning('No search parameters!');

  }
  }
  searchHotelsCity()
    {
      if (this.searchParam!=='' && this.searchParam !== undefined){
        return this.genericService.search(this.relativeURLSearchCity, this.searchParam).subscribe(
        (list: HotelForBackend[])=>{
          this.hotels = list;
          if (this.hotels) {
            if (!(this.hotels.length > 0)){              
              this.toastr.warning('No hotel matches given parameters!');
          }
        }
      }
      );
    }
    else {
      this.toastr.warning('No search parameters!');
  
    }
  }

  showRooms(hotelName: string) {
    this.router.navigate([`/show-rooms/`+ hotelName]);
  }

  reserveRoom(hotelName: string) {
    this.router.navigate([`/room-reservation/`+ hotelName]);
  }

}