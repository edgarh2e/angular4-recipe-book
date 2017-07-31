import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  addRecipe() {
    console.log('ADD RECIPE: ', this.recipe);
    this.recipeService.addRecipe(this.recipe)
      .subscribe((respuesta) => {
        console.log(respuesta);
      });
  }

}
