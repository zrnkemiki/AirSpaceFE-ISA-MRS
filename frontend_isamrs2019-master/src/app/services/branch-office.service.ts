import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BranchOffice} from '../model/branchOffice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {
  private officeUrl = "http://localhost:8080/api/branchOffice";
  private branchOfficesource = new BehaviorSubject<BranchOffice[]>([]);
  branchOfficeObservable = this.branchOfficesource.asObservable();
  private branchOffices = [];

  constructor(private http: HttpClient) {}

  
  addOffice(office){
    this.http.post<BranchOffice>(this.officeUrl, office)
    .subscribe(
      addedOffice =>{
        this.branchOffices.push(addedOffice);
        this.branchOfficesource.next(this.branchOffices);
        alert("Successfully added office. New " + office.officeName + " office added.");
      }
    )
  }
  
  getOffice(id){
    return this.http.get<BranchOffice>(this.officeUrl + "/" + id)
     .pipe(tap(
       office =>{
         for (var i = 0; i < this.branchOffices.length; i++){
           if (office.id === this.branchOffices[i].id){
             this.branchOffices[i] = office;
             this.branchOfficesource.next(this.branchOffices);
             return office;
           }
         }
       })
     )
   }

  findAll(){
    this.http.get<BranchOffice[]>(this.officeUrl + "/admin")
    .subscribe(branchOffices => {
      this.branchOffices = branchOffices;
      this.branchOfficesource.next(this.branchOffices);
    });
    
  }
  
  deleteOffice(id){
  this.http.delete<BranchOffice>(this.officeUrl + "/" + id)
    .subscribe(
      response =>{
        for (var i = 0; i < this.branchOffices.length; i++){
          if (id === this.branchOffices[i].id){
            this.branchOffices.splice(i, 1);
            this.branchOfficesource.next(this.branchOffices);
            return;
          }
        }
      }
    )
  }

  //ODRADITI BACKEND
  editOffice(office){
    this.http.put<BranchOffice>(this.officeUrl, office)
    .subscribe( editedOffice=>{
      for (var i = 0; i < this.branchOffices.length; i++){;
        if (editedOffice.id === this.branchOffices[i].id){
          this.branchOffices[i] = editedOffice;
          this.branchOfficesource.next(this.branchOffices);
          return;
        }
      }
    });
  }


}