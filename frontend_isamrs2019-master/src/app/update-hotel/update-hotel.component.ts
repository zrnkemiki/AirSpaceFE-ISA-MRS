import { Component, OnInit, Input } from '@angular/core';
import { HotelForBackend } from '../model/hotel-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  @Input()
  hotel: HotelForBackend;

  relativeUrl: string;

  constructor(private service: GenericService, private toastr: ToastrService) { 
    this.hotel = {city: '', description: '', name: '', stars: 0, state: '', street: ''};
    this.relativeUrl = "/hotel_admin/update-hotel"
  }

  ngOnInit() {
  }

  updateHotel() {
    this.service.put(this.relativeUrl, this.hotel).subscribe(
      () => {
          this.toastr.success('You have successfully updated a hotel!');
      },
      () => this.toastr.error('You have unsuccessfully updated a hotel!')
    );
  

  }



}
