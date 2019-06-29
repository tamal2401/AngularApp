import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showDetails : boolean;
  loaded : boolean = false;

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this.users = [
        {
          firstName: 'Tamal',
          lastName: 'Das',
          age: 25,
          address: {
            street: 'Selimpur lane',
            city: 'kolkata',
            pin: 700031
          }
        },
        {
          firstName: 'Epshita',
          lastName: 'Banerjee',
          age: 22,
          address: {
            street: 'Madhyam Gram',
            city: 'North 24 Paraganas',
            pin: 700102
          }
        },
        {
          firstName: 'Susmita',
          lastName: 'Das',
          age: 21,
          address: {
            street: 'Selimpur lane',
            city: 'kolkata',
            pin: 700031
          }
        }
      ];
      this.loaded=true;
    },2000);

    this.showDetails = false;
  }

  addUser(user : User){
    this.users.push(user);
  }

}
