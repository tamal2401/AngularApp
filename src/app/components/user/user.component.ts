import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent{
    /* declaring the properties & assigning datatypes to those properties */
    firstName : String;
    lastName : String;
    age : Number;
    address;
    intArray : Number[];
    hasGf : Boolean;

    /* decaring constuctor for the class and assigning values to the properties 
    while the class is getting instantiated */
    constructor(){
        console.log('component has been initialized');
        this.firstName = 'Tamal';
        this.lastName = 'Das';
        this.age = 25;
        this.address = {
            streetNo : '5',
            street :'Selimpur Lane',
            area : 'Dhakuria',
            pin : '700031'
        }
        this.intArray = [1,2,3,4,5];
        this.hasGf = true
    }
    //declaring methods of that class
    method1(){
        console.log(`First name is ${this.firstName}`);
    }

    method2(){
        console.log(`Second name is ${this.lastName}`);
    }

    showPincode(){
        return this.address.pin;
    }
}