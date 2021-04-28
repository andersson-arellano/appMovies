import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { PrimengmModule } from './../primengm/primengm.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { RankingBarComponent } from './components/ranking-bar/ranking-bar.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    CardMovieComponent,
    RankingBarComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PrimengmModule,
    InfiniteScrollModule,
    RoundProgressModule
  ],
  exports:[
    MoviesListComponent
  ]
})
export class MoviesModule { }
