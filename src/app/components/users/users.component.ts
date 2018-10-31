import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    userName: '',
    email: '',
    phone: null,
  };
  users: User[];
  // showExtended = true;
  // // loaded: false;
  // enableAdd: true;
  enabled = false;
  showUserForm = true;

  constructor() { }

  ngOnInit() {
    this.users = [ ];
  }
  addUser() {
    this.users.unshift(this.user);
    this.user = {
      userName: '',
      email: '',
      phone: null,
    };
  }
  onSubmit (e) {
    e.preventDefault();
    console.log(123);
  }
}
