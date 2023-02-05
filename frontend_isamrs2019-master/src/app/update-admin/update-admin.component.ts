import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from '../service/generic.service';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { AdminUpdate } from '../model/admin-update';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  hotelAdmin: User;
  relativeURL: string;
  adminUpdated: AdminUpdate;
  

  constructor(private formBuilder: FormBuilder,private router: Router, private toastr: ToastrService, private loginService : LoginService ,
    private service: GenericService) {
      this.relativeURL = '/hotel_admin/update-admin'
      this.adminUpdated = {username: '',email: '', oldPassword: '', newPassword: ''};
     }

  ngOnInit() {
    const currentUser: User = this.loginService.currentUserValue;
    if(currentUser.userType == "HOTEL_ADMIN"){
      this.hotelAdmin = currentUser;
     
    }
    this.adminUpdated.username = this.hotelAdmin.username;
    this.adminUpdated.email = this.hotelAdmin.email;
  }

  onSubmit() {
    
    let stopAdding: boolean = false;

    if (!this.adminUpdated.email){
      this.toastr.error('Email is invalid!');
      stopAdding = true;
    }
    if (!this.adminUpdated.oldPassword && this.adminUpdated.newPassword) {
      this.toastr.error('You have to enter an old password to make a new one!');
      stopAdding = true;
    }
    if (stopAdding) {
      return;
    }
  
    this.service.put(this.relativeURL, this.adminUpdated).subscribe(
      () => {
          this.toastr.success('You have successfully updated an admin!');
      },
      () => this.toastr.error('You have unsuccessfully added an admin!')
    );
  
    }
  
  }
