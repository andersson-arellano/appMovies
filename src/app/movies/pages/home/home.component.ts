import { Component, OnDestroy, OnInit } from '@angular/core';
import { PaginationMovie, Result } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{


  paginateMovies: PaginationMovie[]=[];
  pageInit: number = 1;
  movie: Result[] = [];
  postActual: number = 0;
  subscription!: Subscription;

  constructor(
    private moviesServices:MoviesService
  ) { }


  ngOnInit(): void {
    this.getMovies(this.pageInit);
  }
  getMovies(page:number){
    this.moviesServices.getMovies(page)
      .subscribe( paginateMovies => {
        this.paginateMovies.push(paginateMovies);
        this.getPosters(this.postActual);
        this.startTimer();

       /*  console.log(this.paginateMovies); */
      } );
  }

  getPosters(postActual:number){
    this.postActual=postActual+5;
    if( this.postActual === this.paginateMovies[0].results.length) this.postActual=0;
    this.movie = this.paginateMovies[0].results.slice(postActual,postActual+5);
  }

  startTimer(){
    const source = timer(6000,2000);
    this.subscription = source.subscribe(val =>{
      this.getPosters(this.postActual);
    })
  }

  stopTimer(){
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }



}
