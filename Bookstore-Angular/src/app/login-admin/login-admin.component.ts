import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  adminLoginForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { 

    
  }

  ngOnInit(): void {
  }

  errorMessage: string;
  checkError: boolean = false;
  checkInfo: boolean = false;
  infoMessage: string;
  onAdminLoginFormSubmit() {
    this.isSubmitted = true;
    if (this.adminLoginForm.valid) {
      console.log("Admin Login Form Submitted", this.adminLoginForm.value);
      this.loginService.loginAdmin(this.adminLoginForm.value.email, this.adminLoginForm.value.password).subscribe(
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
