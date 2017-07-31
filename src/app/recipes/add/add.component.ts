import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  addRecipe() {
    console.log('ADD RECIPE: ', this.recipe);
    this.recipeService.addRecipe(this.recipe)
      .subscribe((respuesta: boolean) => {
        console.log(respuesta);
        if (respuesta) {
          this.router.navigate(['recipes']);
        }
      });
  }

}
