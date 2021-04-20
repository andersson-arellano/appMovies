import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

import { PrimengmModule } from './../primengm/primengm.module';


@NgModule({
  declarations: [
    MoviesListComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    PrimengmModule
  ],
  exports:[
    MoviesListComponent
  ]
})
export class MoviesModule { }
