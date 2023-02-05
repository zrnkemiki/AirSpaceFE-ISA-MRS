import { Component, OnInit } from '@angular/core';
import { BranchOfficeService } from '../services/branch-office.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, ActivatedRoute } from '@angular/router'
import { BranchOffice } from '../model/branchOffice';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {
  public office: BranchOffice;

  constructor(
    private officeService : BranchOfficeService,
     private toastr: ToastrService, 
     private router: Router,
     private route: ActivatedRoute
     ) {
    this.office = {id: '', officeName: '', address: ''};
  }

  ngOnInit() {
    if(this.router.url != "/add-branch-office"){
      this.getEditOffice();
     }
  }

  getEditOffice(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.officeService.getOffice(id).subscribe(office => this.office = office);
  }

  addOffice() {
    //Office name i location unosi korisnik, dok ID rent-a-car SERVISA kom pripada treba sam da zna ili da korisnik UNESE****Dodati atribut da zna kojoj firmi pripada?
    if (this.office.officeName !== '') {
      if(this.router.url != "/add-branch-office"){
        this.officeService.editOffice(this.office);
      }
      else{
        this.officeService.addOffice(this.office);
        
      }
      
      this.allOffices();
      
    }
    else {
      this.toastr.error('Morate uneti marku!');
    }
  }
    

  editVehicle() {
    if (this.office.officeName !== '') {
      this.officeService.editOffice(this.office);
      this.allOffices();
    }
    else {
      this.toastr.error('Morate uneti vrednost u polje!');
    }
  }

  allOffices() {
    this.router.navigate(["/branch-offices"]);
    
  }


}
