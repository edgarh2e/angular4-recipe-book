import { RouterModule, Routes} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
