import { Component, OnInit } from '@angular/core';
import { RentacarForBackend } from '../model/rentacar-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-rentacar',
  templateUrl: './add-rentacar.component.html',
  styleUrls: ['./add-rentacar.component.css']
})
export class AddRentacarComponent implements OnInit {

  rentacar: RentacarForBackend;

  relativeUrl: string;

  constructor(private genericService: GenericService, private toastr: ToastrService) {
      this.rentacar = {id: undefined, name: '', description: '',  street: '', city: '', state: '', address: ''};
      this.relativeUrl = '/sys_admin/add_rentacar';

    }
  

  ngOnInit() {
  }

  save() {
    let stopAdding: boolean = false;

    if (!this.rentacar.name || this.rentacar.name === '') {
      this.toastr.error('Name is empty!');
      stopAdding = true;
    }
    /*
    if (!this.rentacar.state || this.rentacar.state === '') {
      this.toastr.error('State is empty!');
      stopAdding = true;
    }
    if (!this.rentacar.street || this.rentacar.street === '') {
      this.toastr.error('Street is empty!');
      stopAdding = true;
    }

    if (!this.rentacar.city || this.rentacar.city === '') {
      this.toastr.error('City is empty!');
      stopAdding = true;
    }
    */
    if (stopAdding) {
      return;
    }

    this.genericService.save(this.relativeUrl, this.rentacar).subscribe(
      (retValue: boolean) => {
        if (retValue) {
          this.toastr.success('You have successfully added a rent-a-car service!');
        }
        else {
          this.toastr.error('Rent-a-car name already exists, try again!');
        }
      },
      () => this.toastr.error('You have unsuccessfully added a rent-a-car!')
    );
    
  }

}