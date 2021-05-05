import { Component, OnInit } from '@angular/core';
import { PaginationMovie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  paginateSeries: PaginationMovie[]=[];
  pageInit: number = 1;
  actualPage = 1;

  constructor(
    private moviesServices: MoviesService
  ) { }

  ngOnInit(): void {
    this.getSeries( this.pageInit );
  }

  getSeries(page:number){
    this.moviesServices.getSeries(page)
      .subscribe( paginateSeries => {
        this.paginateSeries.push(paginateSeries);
      } );
  }

  addPageSeries( pageActual: string){
    this.actualPage = Number(pageActual) + 1;
    this.getSeries(this.actualPage);
  }

}
