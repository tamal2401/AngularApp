import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    
    /* declaring the properties & assigning datatypes to those properties */
    /* declaring an interface */
    user : User;

    /* decaring constuctor for the class and assigning values to the properties 
    while the class is getting instantiated */
    constructor(){
        console.log('Method is instantiated');
    }

    ngOnInit() {
        this.user = {
            firstName : 'Tamal',
            lastName : 'Das',
            age : 25,
            email : 'tamal.das@citi.com',
        }
    }
}