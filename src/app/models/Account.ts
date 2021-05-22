import { Transaction } from "./Transaction";

export class Account {
    id:number;
    number:string;
    branchLocation:string;
    type:string;
    interestRate:number;
    openingDate:Date;
    active:boolean;
    card:string;
    balance:number;
	transactions:Array<Transaction>;
}