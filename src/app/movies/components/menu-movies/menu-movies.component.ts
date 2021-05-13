import { Result } from './../../interfaces/movie.interface';
import { Component, Input, OnInit } from '@angular/core';
import { PaginationMovie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-menu-movies',
  templateUrl: './menu-movies.component.html',
  styleUrls: ['./menu-movies.component.css']
})
export class MenuMoviesComponent implements OnInit {

@Input() movie:Result[] = [];

  constructor(
    private moviesServices:MoviesService
  ) { }

  ngOnInit(): void {
  }



  getImg( img: string ){
    /* console.log(this.movie); */
    if( img === null ) return 'assets/imagen-no-encontrada.png';
    return `https://image.tmdb.org/t/p/original/${img}`
  }

}
