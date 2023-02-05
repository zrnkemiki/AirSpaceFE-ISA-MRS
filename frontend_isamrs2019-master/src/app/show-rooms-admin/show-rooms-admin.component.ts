import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';
import { GenericService } from '../service/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddRoomComponent } from '../add-room/add-room.component';
import { HotelForBackend } from '../model/hotel-backend';


@Component({
  selector: 'app-show-rooms-admin',
  templateUrl: './show-rooms-admin.component.html',
  styleUrls: ['./show-rooms-admin.component.css']
})
export class ShowRoomsAdminComponent implements OnInit {
  @Input()
  rooms: Room[];

  @Input()
  hotel: HotelForBackend;

  hotelName: string;
  closeResult: string;
  relativeUrlRooms: string;
  relativeUrlRoomDelete: string;
  
  @Output()
  roomDeleted = new EventEmitter();




  constructor(private service : GenericService, private toastr: ToastrService, private router: Router,
     private route: ActivatedRoute){
       this.relativeUrlRoomDelete = '/hotel_admin';
       this.relativeUrlRooms= '/hotel_admin/get_rooms';

  }
  ngOnInit() {
  
  }

  

  deleteRoom(id: number){
    this.service.delete(this.relativeUrlRoomDelete, id).subscribe(
      (success: boolean) => {
        if (success) {
            this.roomDeleted.emit();
            this.toastr.success('Room is successfully deleted!');
          }
        else {
            this.toastr.warning('Room was not deleted!');
          }
        },     
      error => console.log('Error: ' + JSON.stringify(error))
    );
  }




}

