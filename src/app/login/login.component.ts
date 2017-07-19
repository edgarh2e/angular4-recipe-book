import { Component, OnInit } from '@angular/core';
import {User} from '../recipes/user';
import { UserService } from '../services/user.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  user: User;
  loading: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.loading = false;
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  login() {
    console.log('LOGIN');
    this.loading = true;
    for (let i = 0 ; i < this.users.length; i++ ) {
        if (this.users[i].name === this.user.name && this.users[i].password === this.user.password ) {
          alert('usuario correcto');
          this.loading = false;
        }
    }
    if (this.loading) {
      alert('usuario y/o contraseña incorrectas');
    }
  }

}
