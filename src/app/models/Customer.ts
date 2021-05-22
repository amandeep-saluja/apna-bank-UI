import { Account } from "./Account";

export class Customer {
    id: number;
    name: string;
    password: string;
    dateOfBirth:Date;
    gender:string;
    phoneNo:string;
    emailId:string;
    aadharId:string;
    address:string;
    joiningDate:Date;
    account:Account;
}