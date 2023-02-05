import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Room } from '../model/room';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  roomTypes: string[] = ['ROOM', 'APARTMENT', 'STUDIO', 'SUITE'];
  room: Room;
  relativeUrl: string;

  @Output()
  roomAdded = new EventEmitter();


    
  constructor(private genericService: GenericService, private toastr: ToastrService) {

    this.relativeUrl = "/hotel_admin/add_room";
    this.room = {id: 0, number: 0, floor: 0 , roomType: '', numOfBeds: 0, price: 0};
  }
  

  ngOnInit() {
  }

  save() {
    let stopAdding: boolean = false;
  
    if (!this.room.numOfBeds || this.room.numOfBeds === 0) {
      this.toastr.error('Num of beds is empty!');
      stopAdding = true;
    }
    if (stopAdding) {
      return;
    }
  
    this.genericService.save(this.relativeUrl, this.room).subscribe(
      (retValue: boolean) => {
        if (retValue) {
          this.roomAdded.emit();
          this.toastr.success('You have successfully added a room!');
        }
        else {
          this.toastr.error('Error, You have unsuccessfully added a room!');
        }
      },
      () => this.toastr.error('You have unsuccessfully added a room!')
    );
  
    }
  

}
