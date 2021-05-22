import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { FormatNumberPipe } from '../format-number.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    AccountPageComponent,
    ProfilePageComponent,
    TransactionPageComponent,
    HomeMenuComponent,
    FormatNumberPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
