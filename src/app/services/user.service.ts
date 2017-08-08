import { Injectable } from '@angular/core';
import { User } from '../recipes/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  public getUsers(): Observable<User[]> {
    return this.http.get(environment.GET_USERS)
      .map((response: Response) => response.json());
  }
}
