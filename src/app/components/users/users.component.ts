import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = {
    firstName : '',
    lastName : '',
    age : null,
    email : '',
  };

  users: User[];
  showDetails : boolean;
  loaded : boolean = false;
  enableAdd : boolean = false;
  enableButton : {};
  showextended : {};
  showUserForm : boolean = false;
  @ViewChild("userForm") form : any;

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this.users = [
        {
          firstName: 'Tamal',
          lastName: 'Das',
          age: 25,
          email : 'tamal.das@gmail.com',
          isActive : true,
          registerd : new Date('12/05/2009 12:25:00'),
          hide : true,
        },
        {
          firstName: 'Epshita',
          lastName: 'Banerjee',
          age: 22,
          email:'epshita.banerjee@gmail.com',
          isActive : true,
          registerd : new Date('05/09/2019 05:25:00'),
          hide : true,
        },
        {
          firstName: 'Susmita',
          lastName: 'Das',
          age: 21,
          email : 'susmita.das@gmail.com',
          isActive : false,
          hide : true,
        },
        {
          firstName: 'shila',
          lastName: 'Das',
          isActive : true,
          registerd : new Date('12/05/2009 12:25:00'),
          hide : true,
        }
      ];
      this.loaded=true;
    },2000);

    this.showDetails = true;
    this.setEnableButton();
    this.setShowExtended();
  }

  /* addUser(){
    this.user.isActive = true;
    this.user.registerd = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName : '',
    lastName : '',
    age : null,
    email : '',
    }
  } */

  setEnableButton(){
    this.enableButton = {
      'btn-success' : this.enableAdd
    }
  }  

  setShowExtended(){
    this.showextended = {
      'padding-top' : this.showDetails ? '0px':'40px',
    }
  }

  toggleHide(user : User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}:{value : User,valid : boolean}){
    if(!valid){
      console.log("Form is not valid");
    }else{
      value.isActive = true;
      value.registerd = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
