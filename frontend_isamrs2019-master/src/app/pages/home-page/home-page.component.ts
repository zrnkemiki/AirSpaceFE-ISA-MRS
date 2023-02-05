import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { LoginService } from '../../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private currentUserEmail: string;
  private currentUserUsername: string;

  constructor(private router: Router, private loginService : LoginService, private location: Location) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')!= null){
      const currentUser: any = this.loginService.currentUserValue;

      //this.currentUserEmail = currentUser.email
      this.currentUserUsername = currentUser.username} 
      
  }

  myRentaCarReservations(){
    this.router.navigate(["/my-renta-car-reservations"]);
  }

  myHotelReservations(){
    this.router.navigate(["/my-hotel-reservations"]);
  }

  

  profileView(){
    alert("To-DO")
  }

  login(){
    this.router.navigate(["/login"]);
  }
  register(){
    this.router.navigate(["/registration"]);
  }

  logout(){
    this.loginService.logout();
    location.reload()
  }

}
