import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {AuthenticationGuardService} from '../services/authentication-guard.service';
import {ModuleWithProviders} from '@angular/core';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {AddComponent} from './add/add.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeListComponent, canActivate: [AuthenticationGuardService]},
    { path: 'add', component: AddComponent, canActivate: [AuthenticationGuardService]}
  ]}
];

export const recipesRouting: ModuleWithProviders = RouterModule.forChild(recipesRoutes);
