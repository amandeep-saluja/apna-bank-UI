import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit {

    transactions:Transaction[];
    displayedColumns: string[] = ['id', 'source', 'destination', 'status', 'timestamp', 'type'];
    dataSource: MatTableDataSource<Transaction>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

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
        this.getUserDetails();
        this.dataSource = new MatTableDataSource(this.transactions);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    }

    getUserDetails() {
        this.transactions = this._loginService.getDataFromLocalStorage().data.account.transactions;
        console.log(this.transactions)
    }

    goBack() {
        this.location.back();
    }
}
