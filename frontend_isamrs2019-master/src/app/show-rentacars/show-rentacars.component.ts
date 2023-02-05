import { Component, OnInit } from '@angular/core';
import { RentacarForBackend } from '../model/rentacar-backend';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-show-rentacars',
  templateUrl: './show-rentacars.component.html',
  styleUrls: ['./show-rentacars.component.css']
})
export class ShowRentacarsComponent implements OnInit {

  rentacars: RentacarForBackend[];
  relativeUrlForRentacars: string;
  relativeUrlForBranchOffices: string;
  relativeUrlForRentacarAdmin: string;
  rentaCarAdmin : RentacarForBackend;
  


  constructor(
    private genericService: GenericService, 
    private toastr: ToastrService, 
    private router: Router,
    private loginService : LoginService){
      this.relativeUrlForRentacars = '/sys_admin/get_rentacars';
      this.relativeUrlForRentacarAdmin = '/rentacar/admin';
      this.relativeUrlForBranchOffices = '/';

  }
  ngOnInit() {
    const currentUser: User = this.loginService.currentUserValue;
    if(currentUser && currentUser.userType == "RENTACAR_ADMIN"){
      this.genericService.get(this.relativeUrlForRentacarAdmin).subscribe(
        (rentaDTO : RentacarForBackend) => 
        {
          this.rentaCarAdmin = rentaDTO;
        }
        );
      
    } else {
      this.getRentacars();
    }
    
  }

  getRentacars() {
    this.genericService.getAll(this.relativeUrlForRentacars).subscribe(
    (rentacars: RentacarForBackend[]) => {
      this.rentacars = rentacars;
      if (this.rentacars) {
        if (this.rentacars.length > 0) {  
         //this.toastr.success('Rent-a-car services are successfully loaded!');
        }
        else {
          //this.toastr.warning('There are no rent-a-car services at the moment!');
        }
      }
      else {
        this.toastr.error('Problem with loading of rent-a-car services!');
      }
  },
  error => console.log('Error: ' + JSON.stringify(error))
);

  }

  rentaCarReport(id){
    this.router.navigate(["/renta-car-report/" + id])
  }

  editRentaCar(id){
    this.router.navigate(["/edit-renta-car/"+id]);
  }

  vehicleReservation(id){
    this.router.navigate(["/renta-car-reservation/"+id]);
  }

  showBranchOffices() {
    this.router.navigate(["/branch-offices"]);
  }

  showVehicles(){
    this.router.navigate(["/vehiclesSED"])
  }

}
