import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Customer } from '../models/Customer';
import { Employee } from '../models/Employee';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private _loginService:LoginService,
                private router:Router) { }

    hide = true;
    loginForm: FormGroup = new FormGroup({
        phoneNo: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        userRole: new FormControl('', Validators.required)
    });

    ngOnInit(): void {}

    toggleHide() {
        this.hide = !this.hide;
    }

    submit() {
        if(this.loginForm.valid) {
            this._loginService.login(this.loginForm.value).then((result:any) => {
                console.log('Data found: ',result);
                this.router.navigate(['/home']);
            }, error => {
                console.log("ERROR=>>>>", error.error);
            }).catch(error => {
                console.log("Catching the error: ",error.error)
            });
        }
    }

}
