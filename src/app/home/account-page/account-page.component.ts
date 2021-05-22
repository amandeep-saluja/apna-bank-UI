import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

    user:any;
    account:Account;

    constructor(
        private _loginService:LoginService,
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
        this.account = this._loginService.getDataFromLocalStorage().data.account;
        console.log('data: ',this.user);
    }

    goBack() {
        this.location.back();
    }

}
