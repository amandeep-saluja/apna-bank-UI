import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user:any;

    constructor(private _loginService:LoginService,
                private router:Router) {
        
    }

    getUserDetails() {
        this._loginService.user.subscribe((result:any) => {
            this.user = result;
        });
    }

    ngOnInit(): void {}


}
