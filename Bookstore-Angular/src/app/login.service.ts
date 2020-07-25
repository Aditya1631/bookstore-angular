import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInformation } from './customer-information';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email:string;
  password:string;
  admin:Admin=new Admin();
  customer:CustomerInformation=new CustomerInformation();
  isCustomerLoggedIn():boolean{
    if(this.customer==undefined)
    {return false;}
    return true;
  }
  isAdminLoggedIn():boolean{
    if(this.admin==undefined)
    {return false;}
    return true;
  }

  constructor(private http:HttpClient) { }

  params=new HttpParams();
  request:Observable<any>;
loginCustomer(customerEmail:string, customerPassword:string):Observable<any>{
  this.request= this.http.get("http://localhost:1146/customerlogin",{params:{email: customerEmail, password: customerPassword}});
  this.request.subscribe((data)=>{this.customer=data});
  return this.request;
}

loginAdmin(adminEmail:string, adminPassword:string):Observable<any>{
  this.request= this.http.get("http://localhost:1146/adminlogin",{params:{email: adminEmail, password: adminPassword}});
  this.request.subscribe((data)=>{this.admin=data});
  return this.request;
}


}
