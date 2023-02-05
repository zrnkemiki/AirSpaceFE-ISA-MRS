import { Component, OnInit } from '@angular/core';
import { AirlineForBackend } from '../model/airline-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-airlines',
  templateUrl: './show-airlines.component.html',
  styleUrls: ['./show-airlines.component.css']
})
export class ShowAirlinesComponent implements OnInit {

  airlines: AirlineForBackend[];
  relativeUrlForAirlines: string;
  relativeUrlForFlights: string;

  


  constructor(private genericService: GenericService, private toastr: ToastrService){
      this.relativeUrlForAirlines = '/sys_admin/get_airlines';
      this.relativeUrlForFlights = '/';

  }
  ngOnInit() {
    this.getAirlines();
  }

  getAirlines() {
    this.genericService.getAll(this.relativeUrlForAirlines).subscribe(
    (airlines: AirlineForBackend[]) => {
      this.airlines = airlines;
      if (this.airlines) {
        if (this.airlines.length > 0) {  
         // this.toastr.success('Airlines are successfully loaded!');
        }
        else {
          //this.toastr.warning('There are no airlines at the moment!');
        }
      }
      else {
        this.toastr.error('Problem with loading of airlines!');
      }
  },
  error => console.log('Error: ' + JSON.stringify(error))
);

  }

  showFlights() {

  }

}
