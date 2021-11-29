import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myFormControlGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginRegisterService,
    private alertService: AlertServiceService
  ) { }

  ngOnInit() {
    this.myFormControlGroup = this.formBuilder.group({
      email: ['',Validators.required],
      password:['',Validators.required]
    });
  }

  logIn(){
    const requesDataLogin = {
      email: this.myFormControlGroup.controls.email.value,
      password: this.myFormControlGroup.controls.password.value
    };

    this.loginService.getUserValid(requesDataLogin).subscribe((data) =>{
      if(data.response === true){
        this.alertService.showConfirm('Login completado!', data.message, '/index/inicio');
      }else{
        this.alertService.showConfirm('Login fallido', data.message, '/login');
      }
    });
  }

}
