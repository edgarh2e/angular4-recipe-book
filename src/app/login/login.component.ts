import { Component, OnInit } from '@angular/core';
import {User} from '../recipes/user';
import { UserService } from '../services/user.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  user: User;
  loading: boolean;

  constructor(private userService: UserService,
              private router: Router) { }

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
          localStorage.setItem('usuarioActual', JSON.stringify(this.user));
          this.loading = false;
        }
    }
    this.router.navigate(['recipes']);
  }

}
