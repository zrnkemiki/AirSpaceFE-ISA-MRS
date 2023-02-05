import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sys-admin-page',
  templateUrl: './sys-admin-page.component.html',
  styleUrls: ['./sys-admin-page.component.css']
})
export class SysAdminPageComponent implements OnInit {

  private currentUserUsername: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!= null){
      const currentUser: any = this.loginService.currentUserValue;

      //this.currentUserEmail = currentUser.email
      this.currentUserUsername = currentUser.username} 

  }


  logout(){
    this.loginService.logout();
  }
}
