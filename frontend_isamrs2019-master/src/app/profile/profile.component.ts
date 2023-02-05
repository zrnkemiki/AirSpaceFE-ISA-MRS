import { Component, OnInit, Input, Directive } from '@angular/core';
import { EditRegisterUser } from '../model/edit-register-user';
import { NgControl, FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { GenericService } from '../service/generic.service';
import { ToastrService } from 'ngx-toastr';


/*@Directive({
  selector: '[disableControl]'
})
export class DisableControlDirective {

  @Input() set disableControl( condition: boolean ) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }

  constructor( private ngControl: NgControl ) {
  }

}*/
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public passwordsEqual = false;

  private urlEditRegisterUser = '/user/updateRegisterUser';
  private passwordRepeated = '';

  availability: boolean[] = [true, true, true, true, true, true];

  public editUser: EditRegisterUser = {id: '1', name: 'Slaven', surname: 'Garic',
   email: 'slavengaric@gmail.com', password: 'slaven', city: 'Novi Sad', number: '142131244'
    };

    public s = 'safsaf';
  constructor(private service: GenericService, private toastr: ToastrService) {}


  ngOnInit() {
  }

  editRegisterUser() {
      this.s = 'asfsaslaven';

      return this.service.put(this.urlEditRegisterUser, this.editUser).subscribe(
        (updated: any) => {
          if (updated) {
            this.toastr.success('User was successfully updated :)');
          } else {
            this.toastr.error('User is not updated :(');
          }
        }, (err: any) =>  this.toastr.error('User is not updated :(')
      );
  }

  changeAvailability(index: string) {

    if (this.availability[Number(index)]) {
      this.availability[Number(index)] = false;
    } else {
      this.availability[Number(index)] = true;
    }
  }

  checkPasswordValidation() {

    if (this.editUser.password === this.passwordRepeated) {
      this.passwordsEqual = true;
    } else {
      this.passwordsEqual = false;
    }
  }


}
