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
    hide: true,
  };
  users: User[];
  // showExtended = true;
  // // loaded: false;
  // enableAdd: true;
  enabled = false;
  showUserForm = true;
  formsAmount = 0;
  currentFormNumber = 0;

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
      hide: true,
    };
    this.currentFormNumber++;
    // console.log(this.currentFormNumber);
    // return this.currentFormNumber;
  }
  onSubmit (e) {
    e.preventDefault();
  }
  // checkFormsAmountVal() {
  //   console.log(this.currentFormNumber);
  //
  // }
}
