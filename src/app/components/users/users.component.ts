import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    secondName: '',
    age: null,
    email: '',
    phone: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  // showExtended = true;
  // // loaded: false;
  // enableAdd: true;
  enabled = false;
  showUserForm = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      // {
      //   firstName: 'Dimas',
      //   secondName: 'Rusnak',
      //   age: 23,
      //   email: 'user@yahoo.com',
      //   address: {
      //     street: 'Vorobkevicha st.',
      //     city: 'Chernivtsi',
      //     state: 'UA'
      //   },
      //   isActive: true,
      //   registered: new Date ('10/19/1995 06:20:00'),
      //   hide: true,
      // },
      // {
      //   firstName: 'Mark',
      //   secondName: 'November',
      //   age: 23,
      //   email: 'user@gmail.com',
      //   address: {
      //     street: 'Pobediteley st.',
      //     city: 'Kiev',
      //     state: 'UA'
      //   },
      //   isActive: true,
      //   registered: new Date ('11/24/1994 06:20:00'),
      //   hide: true,
      // },
    ];
    // this.addUser({
    //   firstName: 'Andrey',
    //   secondName: 'Ivanov',
    //   age: 24,
    //   address: {
    //     street: 'Fontan square.',
    //     city: 'Vinnitsa',
    //     state: 'UA'
    //   },
    //   registered: new Date ('09/19/1994 '),
    //   hide: true,
    // });
  }
  addUser() {
    this.users.unshift(this.user);
  }

  onSubmit (e) {
    e.preventDefault();
    console.log(123);
  }
}
