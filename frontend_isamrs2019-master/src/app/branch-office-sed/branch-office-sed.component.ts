import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BranchOffice } from '../model/branchOffice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BranchOfficeService } from '../services/branch-office.service';
;

@Component({
  selector: 'app-branch-office-sed',
  templateUrl: './branch-office-sed.component.html',
  styleUrls: ['./branch-office-sed.component.css']
})
export class BranchOfficeSedComponent implements OnInit {

public branchOffices: BranchOffice[];

  constructor(
  private http: HttpClient, 
  private router: Router,
  private branchOfficeService: BranchOfficeService,
    
  ) { }

  ngOnInit() {
    this.branchOffices = [];
    this.getOffices();
  }


  addOffice(){
    this.router.navigate(["/add-branch-office"]);
  }

  editBranchOffice(id){
    this.router.navigate(["/edit-branch-office/"+id]);
  }

  searchOffice(searchParam){
    alert("TO-DO")
  }

  deleteBranchOffice(id){
    this.branchOfficeService.deleteOffice(id);
  }

  getOffices(){
    this.branchOfficeService.branchOfficeObservable.subscribe( branchOffices => this.branchOffices = branchOffices);
    this.branchOfficeService.findAll();
    
    
  }


}
