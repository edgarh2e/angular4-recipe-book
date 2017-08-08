import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  public getRecipes(): Observable<Recipe[]> {
    return this.http
      .get(environment.GET_RECIPES)
      .map((response: Response) => response.json());
  }

  public addRecipe(recipe: Recipe): Observable<boolean> {
    return this.http.post(environment.ADD_RECIPES,
      this.getBodyRequest(recipe),
      this.getRequestOptions()).map((response: Response) => response.json());
  }

  private getBodyRequest(datos: any): string {
    console.log(JSON.stringify(datos));
    return JSON.stringify(datos);
  }
  private getRequestOptions(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

}
