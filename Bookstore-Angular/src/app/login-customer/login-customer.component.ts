import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  customerLoginForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { 

    this.customerLoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]+$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+@[0-9]*$")]),

    });
  }

  ngOnInit(): void {
  }

  errorMessage: string;
  checkError: boolean = false;
  checkInfo: boolean = false;
  infoMessage: string;
  onCustomerLoginFormSubmit() {
    this.isSubmitted = true;
    if (this.customerLoginForm.valid) {
      console.log("Customer Login Form Submitted", this.customerLoginForm.value);
      this.loginService.loginCustomer(this.customerLoginForm.value.email, this.customerLoginForm.value.password).subscribe(
        (data) => {
          this.infoMessage = "You have successfully logged in";
          this.checkInfo = true;
          this.checkError = false;
        },
        (error) => {
          this.errorMessage = error.error;
          this.checkError = true;
          this.checkInfo = false;
        }
      )
    }

  }


}
