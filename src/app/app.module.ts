import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeService } from './services/recipe.service';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import {UserService} from './services/user.service';
import { AddPlusPipe } from './common/pipes/add-plus.pipe';
import {AuthenticationGuardService} from './services/authentication-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    LoginComponent,
    AddPlusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [RecipeService, UserService, AuthenticationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
