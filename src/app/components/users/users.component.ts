import { Component, OnInit, ViewChild} from '@angular/core';

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
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
    this.users = [ ];
  }
  // addUser() {
  //   this.users.unshift(this.user);
  //   this.user = {
  //     userName: '',
  //     email: '',
  //     phone: null,
  //     hide: true,
  //   };
  //   this.currentFormNumber++;
  //   // console.log(this.currentFormNumber);
  //   // return this.currentFormNumber;
  // }
  onSubmit ({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      this.users.unshift(value);
      value.hide = true;
      this.form.reset();
      this.currentFormNumber++;
    }
  }
  // checkFormsAmountVal() {
  //   console.log(this.currentFormNumber);
  //
  // }
}
