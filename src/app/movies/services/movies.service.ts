import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { PaginationMovie } from './../interfaces/movie.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(pageMovie: number = 1): Observable<PaginationMovie> {
    const params = new HttpParams()
      .set('api_key', environment.apiKeyTheMoviesdb)
      .set( 'page',  pageMovie.toString() );
    return this.http.get<PaginationMovie>(`${environment.baseUrl}/discover/movie`, { params });
  }
}
