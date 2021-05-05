import { PaginationMovie } from '../../interfaces/movie.interface';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  paginateMovies: PaginationMovie[]=[];
  pageInit: number = 1;
  actualPage = 1;

  constructor(
    private moviesServices: MoviesService
  ) {

  }

  ngOnInit(): void {
    this.getMovies(this.pageInit);
  }

  getMovies(page:number){
    this.moviesServices.getMovies(page)
      .subscribe( paginateMovies => {
        this.paginateMovies.push(paginateMovies);
      } );
  }

  addPageMovie( pageActual: string){
    this.actualPage = Number(pageActual) + 1;
    this.getMovies(this.actualPage);
  }


}
