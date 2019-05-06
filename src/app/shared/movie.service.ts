import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpsClient: HttpClient) { }
  getMovies(): Observable<Movie[]>  {
    return this.httpsClient.get<Movie[]>(environment.moviesUrl);
  }
  getMovie(id: number): Observable<Movie> {
    return this.httpsClient.get<Movie>(`${environment.moviesUrl}/${id}`);
  }
}
