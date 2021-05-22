import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeComponent } from './home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TransactionPageComponent } from './transaction-page/transaction-page.component';

const secondaryRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: HomeMenuComponent },
            { path: 'profile', component: ProfilePageComponent },
            { path: 'account', component: AccountPageComponent },
            { path: 'transaction', component: TransactionPageComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(secondaryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }