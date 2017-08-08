import { Injectable } from '@angular/core';
import { User } from '../recipes/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  public getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:8081/service/users/getUsers')
      .map((response: Response) => response.json());
  }
}
