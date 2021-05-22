import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

    constructor(private _loginService:LoginService,
                private router:Router) { }

    user:any;

    ngOnInit() {}

    showData(page:string) {
        if(page == 'profile') {
            this.router.navigate(['/home/profile']);
        } else if(page == 'account') {
            this.router.navigate(['/home/account']);
        } else if(page == 'transaction') {
            this.router.navigate(['/home/transaction']);
        }
    }
}
