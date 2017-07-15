import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    let recipe = new Recipe();
    recipe.id = 1;
    recipe.name = 'Donuts';
    recipe.description = 'Donuts with chocolate';
    this.recipes.push(recipe);
    recipe = new Recipe();
    recipe.id = 2;
    recipe.name = 'Chicken';
    recipe.description = 'Fried chicken';
    this.recipes.push(recipe);
  }

}
