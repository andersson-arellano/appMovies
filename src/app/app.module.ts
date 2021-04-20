import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';



// get JWT for angulat-jwt
export function tokenGetter() {
  return environment.tokenTheMoviesdb;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains:['api.themoviedb.org']
      }
    }),
    MoviesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
