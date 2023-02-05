import { Component, OnInit } from '@angular/core';
import { FlightDTO } from '../model/flight-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  public flight: FlightDTO;

  public fromDate: any;
  public timeFrom: string;

  public toDate: any;
  public timeTo: string;


  constructor(private http: HttpClient, private toastr: ToastrService, private calendar: NgbCalendar) {
    this.flight = {flightNumber: '', airplaneModel: '', fromAirportId: '', toAirportId: '', departureDateTime: '', arrivalDateTime: ''};
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getToday();
  }

  ngOnInit() {
  }


  addFlight() {

    const charactersMonthFrom: string = String(this.fromDate.month);
    if (charactersMonthFrom.length === 1) {
      this.fromDate.month = '0' + this.fromDate.month;
    }
    let charactersDay: string = String(this.fromDate.day);
    if (charactersDay.length === 1) {
      this.fromDate.day = '0' + this.fromDate.day;
    }
    const dateFrom: string = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
    this.flight.departureDateTime = dateFrom + ' ' +  this.timeFrom;


    const charactersMonthTo: string = String(this.toDate.month);
    if (charactersMonthFrom.length === 1) {
      this.toDate.month = '0' + this.toDate.month;
    }
    charactersDay = String(this.toDate.day);
    if (charactersDay.length === 1) {
      this.toDate.day = '0' + this.toDate.day;
    }
    const dateTo: string = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
    this.flight.arrivalDateTime = dateTo + ' ' +  this.timeTo;



    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post("http://localhost:8080/api/flightController/add_flight", this.flight, {headers}).subscribe(
      (added: boolean) => {
        if (added) {
          this.toastr.success('Uspesno dodato.');
        }
      }
    );
  }

}
