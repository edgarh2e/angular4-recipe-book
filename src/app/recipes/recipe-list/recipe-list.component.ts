import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../../services/recipe.service';
import {AddPlusPipe} from '../../common/pipes/add-plus.pipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  newRecipe = 'New Recipe';


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

}
