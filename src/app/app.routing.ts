import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
