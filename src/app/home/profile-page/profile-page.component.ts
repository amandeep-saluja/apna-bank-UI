import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Customer } from 'src/app/models/Customer';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

    user:any;
    profile:Customer|Employee;

    constructor(private _loginService:LoginService,
                private router:Router,
                private location:Location,
                private iconRegistry:MatIconRegistry,
                private domSanitizer:DomSanitizer) 
    { 
        this.iconRegistry.addSvgIcon(
            'back-arrow', 
            this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/back-arrow.svg'));
    }

    ngOnInit() {
        this.getUserDetails();
    }

    getUserDetails() {
        this.profile = this._loginService.getDataFromLocalStorage().data;
        console.log('data: ',this.user);
    }

    goBack() {
        this.location.back();
    }
}
