import { Component, OnInit, Input } from '@angular/core';
import { HotelForBackend } from '../model/hotel-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  
  hotel: HotelForBackend;

  relativeUrl: string;

  constructor(private genericService: GenericService, private toastr: ToastrService) {
      this.hotel = {name: '', stars: 1, description: '',  street: '', city: '', state: ''};
      this.relativeUrl = '/sys_admin/add_hotel';

    }

  ngOnInit() {
  }

  save() {
    let stopAdding: boolean = false;

    if (!this.hotel.name || this.hotel.name === '') {
      this.toastr.error('Name is empty!');
      stopAdding = true;
    }
    if (!this.hotel.street || this.hotel.street === '') {
      this.toastr.error('Street is empty!');
      stopAdding = true;
    }
    if (!this.hotel.state || this.hotel.state === '') {
      this.toastr.error('State is empty!');
      stopAdding = true;
    }
    if (!this.hotel.city || this.hotel.city === '') {
      this.toastr.error('City is empty!');
      stopAdding = true;
    }
    if (!this.hotel.stars || this.hotel.stars === 0) {
      this.toastr.error('Number of hotel stars is empty!');
      stopAdding = true;
    }

    if (stopAdding) {
      return;
    }

    this.genericService.save(this.relativeUrl, this.hotel).subscribe(
      (retValue: boolean) => {
        if (retValue) {
          this.toastr.success('You have successfully added hotel!');
        }
        else {
          this.toastr.error('Hotel name already exists, try again!');
        }
      },
      () => this.toastr.error('You have unsuccessfully added hotel!')
    );
  }

}
