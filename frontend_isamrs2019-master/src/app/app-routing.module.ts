import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleSEDComponent } from './vehicle-sed/vehicle-sed.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddRentacarComponent } from './add-rentacar/add-rentacar.component';
import { ShowHotelsComponent } from './show-hotels/show-hotels.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowRentacarsComponent} from './show-rentacars/show-rentacars.component';
import { ShowAirlinesComponent} from './show-airlines/show-airlines.component';
import { HotelAdminPageComponent } from './pages/hotel-admin-page/hotel-admin-page.component';
import { SysAdminPageComponent } from './pages/sys-admin-page/sys-admin-page.component';
import { ShowRoomsComponent } from './show-rooms/show-rooms.component';
import { BranchOfficeSedComponent } from './branch-office-sed/branch-office-sed.component';
import { AddBranchOfficeComponent } from './add-branch-office/add-branch-office.component';
import { RentaCarReservationComponent } from './renta-car-reservation/renta-car-reservation.component';
import {ShowRoomsAdminComponent} from './show-rooms-admin/show-rooms-admin.component';
import { MyRentaCarReservationsComponent } from './my-renta-car-reservations/my-renta-car-reservations.component';
import { MyHotelReservationsComponent } from './my-hotel-reservations/my-hotel-reservations.component';
import { RentaCarProfileComponent } from './renta-car-profile/renta-car-profile.component';
import { HotelRoomReservationComponent } from './hotel-room-reservation/hotel-room-reservation.component';
import { RentaCarReportComponent } from './renta-car-report/renta-car-report.component';
import { RentaCarReservationSEDComponent } from './renta-car-reservation-sed/renta-car-reservation-sed.component';




const routes: Routes = [
  { path: 'add-vehicle', component: AddVehicleComponent},
  { path: 'edit-vehicle/:id', component: AddVehicleComponent},
  { path: 'vehiclesSED', component: VehicleSEDComponent},
  { path: 'vehiclesSED/:dateFrom/:dateUntil/:numberOfSeats/:id', component: VehicleSEDComponent},
  { path: 'vehiclesSED/:dateFrom/:dateUntil/:numberOfSeats/:city/:id', component: VehicleSEDComponent},
  { path: 'vehiclesSED/:dateFrom/:dateUntil/:hotelName', component: VehicleSEDComponent},
  { path: 'add-flight', component: AddFlightComponent},
  { path: 'add-hotel', component: AddHotelComponent},
  { path: 'add-airline', component: AddAirlineComponent},
  { path: 'add-rentacar', component: AddRentacarComponent},
  { path: 'show-hotels' , component: ShowHotelsComponent},
  { path: 'add-admin'  , component: AddAdminComponent},
  { path: 'show-rooms/:hotelName/:dateFrom/:dateUntil/:numberOfBeds'  , component: ShowRoomsComponent},
  { path: '', // localhost:4200 redirect to localhost:4200/home-page
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {path: 'hotel_admin/show-rooms-admin', component: ShowRoomsAdminComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'homepage', component: HomePageComponent},
  { path: 'hotel-admin', component: HotelAdminPageComponent},
  { path: 'sys_admin', component: SysAdminPageComponent},
  { path: 'branch-offices', component: BranchOfficeSedComponent},
  { path: 'add-branch-office', component: AddBranchOfficeComponent},
  { path: 'edit-branch-office/:id', component: AddBranchOfficeComponent},
  { path: 'renta-car-reservation/:id', component: RentaCarReservationComponent},
  { path: 'my-renta-car-reservations', component: MyRentaCarReservationsComponent},
  { path: 'my-hotel-reservations', component: MyHotelReservationsComponent},
  { path: 'edit-renta-car/:id', component: RentaCarProfileComponent},
  { path: 'room-reservation/:hotelName', component: HotelRoomReservationComponent},
  { path: 'renta-car-report/:id', component: RentaCarReportComponent},
  { path: 'rentaCarReservationSED/:dateFrom/:dateUntil/:hotelId', component: RentaCarReservationSEDComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
