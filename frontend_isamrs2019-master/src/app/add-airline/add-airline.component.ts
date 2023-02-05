import { Component, OnInit } from '@angular/core';
import { AirlineForBackend } from '../model/airline-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  airline: AirlineForBackend;

  relativeUrl: string;

  constructor(private genericService: GenericService, private toastr: ToastrService) {
      this.airline = {name: '', description: '',  street: '', city: '', state: ''};
      this.relativeUrl = '/sys_admin/add_airline';

    }
  

  ngOnInit() {
  }

  save() {
    let stopAdding: boolean = false;

    if (!this.airline.name || this.airline.name === '') {
      this.toastr.error('Name is empty!');
      stopAdding = true;
    }
    if (!this.airline.state || this.airline.state === '') {
      this.toastr.error('State is empty!');
      stopAdding = true;
    }
    if (!this.airline.street || this.airline.street === '') {
      this.toastr.error('Street is empty!');
      stopAdding = true;
    }

    if (!this.airline.city || this.airline.city === '') {
      this.toastr.error('City is empty!');
      stopAdding = true;
    }

    if (stopAdding) {
      return;
    }

    this.genericService.save(this.relativeUrl, this.airline).subscribe(
      (retValue: boolean) => {
        if (retValue) {
          this.toastr.success('You have successfully added an airline!');
        }
        else {
          this.toastr.error('Airline name already exists, try again!');
        }
      },
      () => this.toastr.error('You have unsuccessfully added an airline!')
    );
    
  }

}