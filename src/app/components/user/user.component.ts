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
      userName: 'Dima',
      email: 'user@yahoo.com',
    };
  }
}
