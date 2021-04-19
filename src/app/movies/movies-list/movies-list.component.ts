import { PaginationMovie } from './../interfaces/movie.interface';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  paginateMovies!: PaginationMovie;

  constructor(
    private moviesServices: MoviesService
  ) {


  }

  ngOnInit(): void {

  }

  getMovies(page:number){
    this.moviesServices.getMovies(page)
      .subscribe( paginateMovies => {
        this.paginateMovies = paginateMovies;
        console.log(this.paginateMovies);
      } );
  }

}
