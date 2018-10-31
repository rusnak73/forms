import {Component, OnInit} from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user: User;

  constructor() {
  }
  ngOnInit() {
    this.user = {
      firstName: 'Dima',
      secondName: 'Rusnak',
      age: 23,
      email: 'user@yahoo.com',
      address: {
        street: 'sterrt st.',
        city: 'Lviv',
        state: 'UA'
      }
    };
  }
}
