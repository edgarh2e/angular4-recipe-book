import { Injectable } from '@angular/core';
import { User } from '../recipes/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  public getUsers(): Observable<User[]> {
    return this.http.get('https://private-a925a-users227.apiary-mock.com/users')
      .map((response: Response) => response.json());
  }
}
