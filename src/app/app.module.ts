import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipeService} from './services/recipe.service';
import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';
import {UserService} from './services/user.service';
import {AuthenticationGuardService} from './services/authentication-guard.service';
import {ComunModule} from './common/comun.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ComunModule,
    routing
  ],
  providers: [RecipeService, UserService, AuthenticationGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
