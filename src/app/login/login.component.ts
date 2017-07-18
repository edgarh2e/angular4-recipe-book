import { Component, OnInit } from '@angular/core';
import {User} from '../recipes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.loading = false;
  }

  login() {
    console.log('LOGIN');
    this.loading = true;
  }

}
