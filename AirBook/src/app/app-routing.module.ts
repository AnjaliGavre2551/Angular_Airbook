import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowflightComponent } from './showflight/showflight.component';
import { BodyComponent } from './search/body.component';
import { LoginComponent } from './login/login.component';

import { ReviewbookingComponent } from './reviewbooking/reviewbooking.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { AdmindashordComponent } from './admindashbord/admindashord.component';
import { TicketComponent } from './ticket/ticket.component';
import { PaymentComponent } from './cardpayment/payment.component';
import { PaymentreviewComponent } from './paymentreview/paymentreview.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddflightComponent } from './addflight/addflight.component';



const routes: Routes = [
  {path: '', component: BodyComponent},
  {path:'login',component:LoginComponent},
  {path:'userRegister', component:UserregisterComponent},
  {path: 'showflight', component:ShowflightComponent},
  {path:'review', component:ReviewbookingComponent},
  {path:'seatselection',component:SeatselectionComponent},
  {path:'resetpass', component:ResetpassComponent},
  {path:'admindash',component:AdmindashordComponent},
  {path:'ticket',component:TicketComponent},
  {path:'cardpayment',component:PaymentComponent},
  {path:'paymentreview',component:PaymentreviewComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminregister',component:AdminRegisterComponent},
  {path:'addflight',component:AddflightComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
