import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item.component';
import {NgModule} from '@angular/core';
import {recipesRouting} from './recipes.routing';
import {ComunModule} from '../common/comun.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    ComunModule,
    recipesRouting
  ]
})
export class RecipesModule { }
