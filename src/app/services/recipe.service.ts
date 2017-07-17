import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get('https://private-cecec6-recipebookangular4.apiary-mock.com/recipes')
      .map((response: Response) => response.json());
  }

}
