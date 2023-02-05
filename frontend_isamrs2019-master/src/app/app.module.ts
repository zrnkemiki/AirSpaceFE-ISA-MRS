import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { GenericService } from './service/generic.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddRentacarComponent } from './add-rentacar/add-rentacar.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { HomePageComponent } from './pages/home-page/home-page.component';  
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ShowAirlinesComponent } from './show-airlines/show-airlines.component';
import { ShowRentacarsComponent } from './show-rentacars/show-rentacars.component';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { HotelAdminPageComponent } from './pages/hotel-admin-page/hotel-admin-page.component';
import { ShowRoomsComponent } from './show-rooms/show-rooms.component';
import { SysAdminPageComponent } from './pages/sys-admin-page/sys-admin-page.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { BranchOfficeSedComponent } from './branch-office-sed/branch-office-sed.component';
import { AddBranchOfficeComponent } from './add-branch-office/add-branch-office.component';
import { RentaCarReservationComponent } from './renta-car-reservation/renta-car-reservation.component';
import { ShowRoomsAdminComponent } from './show-rooms-admin/show-rooms-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { MyRentaCarReservationsComponent } from './my-renta-car-reservations/my-renta-car-reservations.component';
import { MyHotelReservationsComponent } from './my-hotel-reservations/my-hotel-reservations.component';
import { RentaCarProfileComponent } from './renta-car-profile/renta-car-profile.component';
import { HotelRoomReservationComponent } from './hotel-room-reservation/hotel-room-reservation.component';
import { RentaCarReportComponent } from './renta-car-report/renta-car-report.component';
import { RentaCarReservationSEDComponent } from './renta-car-reservation-sed/renta-car-reservation-sed.component';





@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    VehicleSEDComponent,
    AddFlightComponent,
    AddHotelComponent,
    AddAirlineComponent,
    AddRentacarComponent,
    AddAdminComponent,
    ShowHotelsComponent,
    HomePageComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    ShowAirlinesComponent,
    ShowRentacarsComponent,
    HotelAdminPageComponent,
    ShowRoomsComponent,
    SysAdminPageComponent,
    AddRoomComponent,
    BranchOfficeSedComponent,
    AddBranchOfficeComponent,
    RentaCarReservationComponent,
    ShowRoomsAdminComponent,
    UpdateAdminComponent,
    UpdateHotelComponent,
    ShowRoomsAdminComponent,
    MyRentaCarReservationsComponent,
    MyHotelReservationsComponent,
    RentaCarProfileComponent,
    HotelRoomReservationComponent,
    RentaCarReportComponent,
    RentaCarReservationSEDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot({preventDuplicates: true})

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    GenericService,
    { provide: 'BASE_API_URL', useValue: 'http://localhost:8080/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
