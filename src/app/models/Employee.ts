import { Account } from "./Account";
import { Department } from "./Department";

export class Employee {
    id: number;
    name: string;
    password: string;
    dateOfBirth:Date;
    gender:string;
    phoneNo:string;
    emailId:string;
    address:string;
	joiningDate:Date;
    account:Account;
	department:Department;
}