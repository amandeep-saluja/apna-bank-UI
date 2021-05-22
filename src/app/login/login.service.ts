import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { Employee } from '../models/Employee';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    user:BehaviorSubject<Customer|Employee> = new BehaviorSubject(null);

    constructor(private http: HttpClient) { }

    /**
     * Method to login user into application
     * @param credentials object of Login
     * @returns Promise of user data object
     */
    login(credentials:Login): Promise<any> {
        let url:string = "http://localhost:8009/login";
        let httpHeaders: HttpHeaders = new HttpHeaders({
            'content-type': 'application/json'
        });
        let body = JSON.stringify(credentials);
        return new Promise(resolve => {
            this.http.post(url, body, {headers: httpHeaders}).subscribe(
                (result:any) => {
                    this.user.next(result);
                    console.log('inside service: ', this.user.value);
                    this.setDataToLocalStorage();
                    resolve(result);
            });
        });
    }

    /**
     * Method to set user data in local storage
     */
    setDataToLocalStorage() {
        localStorage.setItem('token', JSON.stringify(this.user.value));
    }

    /**
     * Method to get user data from local storage
     * @returns return object of user data
     */
    getDataFromLocalStorage():object {
        return JSON.parse(localStorage.getItem('token'));
    }
}
