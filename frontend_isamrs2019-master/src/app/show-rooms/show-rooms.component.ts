import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../service/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { dateRentaCar } from '../model/dateRentaCar';
import { ReservationDTO } from '../model/reservation-DTO';
import { RoomService } from '../services/room.service';
import { RoomReservationService } from '../service/room-reservation.service';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  relativeUrlRooms: string;
  
  rooms: Room[];
  hotelName: string;
  today: Date;
  dateFrom: string;
  dateUntil: string;
  numberOfBeds: string;
  relativeUrlQuery: string;
  relativeUrlReserve: string;


  constructor(private genericService : GenericService, private reservationService: RoomReservationService, private toastr: ToastrService, private router: Router,
     private route: ActivatedRoute){
       this.relativeUrlRooms = '/hotel_admin/get_rooms';
       this.relativeUrlQuery = '/room-reservation/get-avalaible-rooms';
       this.relativeUrlReserve = '/room-reservation/reserve-room';

       this.today=new Date();
  }
  ngOnInit() {
    this.getQueryRooms();
  }

  getRooms(){

    this.genericService.getListByName(this.relativeUrlRooms, this.hotelName).subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        if (this.rooms) {
          if (this.rooms.length > 0) {  
            this.toastr.success('Rooms are successfully loaded!');
          }
          else {
            this.toastr.warning('There are no rooms available at the moment!');
          }
        }
        else {
          this.toastr.error('Problem with loading of rooms!');
        }
    },
    error => console.log('Error: ' + JSON.stringify(error))
    );
  
    
  }

  getQueryRooms(){
    
    this.hotelName = this.route.snapshot.paramMap.get("hotelName");
    this.dateFrom = this.route.snapshot.paramMap.get('dateFrom');
    this.dateUntil = this.route.snapshot.paramMap.get('dateUntil');
    this.numberOfBeds = this.route.snapshot.paramMap.get('numberOfBeds')
    
    this.genericService.findQuery(this.relativeUrlQuery, this.hotelName, this.dateFrom, this.dateUntil, this.numberOfBeds).subscribe(
      (rooms: Room[]) => {
        this.rooms = rooms;
        if (this.rooms) {
          if (this.rooms.length > 0) {  
            //this.toastr.success('Available rooms are successfully loaded!');
          }
          else {
            //this.toastr.warning('There are no available rooms available at the moment!');
          }
        }
        else {
          this.toastr.error('Problem with loading of the rooms!');
        }
    },
    error => console.log('Error: ' + JSON.stringify(error))
    );
  

    var date1 = new Date (this.dateFrom);
    var date2 = new Date (this.dateUntil);

    var diff = Math.abs(date1.getTime() - date2.getTime());
    //this.broj = Math.ceil(diff / (1000 * 3600 * 24)); 
  
  }

  reserve(id : number){
    let reservation : ReservationDTO = { 
      dateFrom: this.route.snapshot.paramMap.get('dateFrom'),
      dateUntil: this.route.snapshot.paramMap.get('dateUntil'),
      vehicleId: 0,
      roomId: id
    };
    this.genericService.save(this.relativeUrlReserve, reservation).subscribe(
      (retValue: boolean) => {
        if (retValue) {
          this.toastr.success('You have successfully reserved a room!');
          var r = confirm("You have successfully reserved a room!\n Would you like to see vehicles available for this period? \nPress cancel if you don't wont.");
          var txt;
          if (r == true) {
            this.router.navigate(["/vehiclesSED/" + this.dateFrom + "/" + this.dateUntil + "/" + this.hotelName])
          } else {
            this.router.navigate(['my-hotel-reservations']);
          }     
          
        }
        else {
          this.toastr.error('Error, problem while reserving a room!');
        }
      },
      () => this.toastr.error('Error, somethin went wrong!')
    );
  }
}