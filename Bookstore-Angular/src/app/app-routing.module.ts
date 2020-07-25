import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';


const routes: Routes = [

  {path:'loginadmin', component: LoginAdminComponent},
  {path:'logincustomer', component: LoginCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginAdminComponent,LoginCustomerComponent]