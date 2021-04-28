import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() movie!: Result;

  constructor() { }

  ngOnInit(): void {

  }

  getImg( img: string ){
    return `https://image.tmdb.org/t/p/original/${img}`
  }

}
