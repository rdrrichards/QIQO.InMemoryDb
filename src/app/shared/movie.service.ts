import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private episodesUrl = 'api/movies';
  constructor(private httpsClient: HttpClient) { }
  getMovies(): Observable<Movie[]>  {
    return this.httpsClient.get<Movie[]>(this.episodesUrl);
  }
  getMovie(id: number): Observable<Movie> {
    return this.httpsClient.get<Movie>(`${this.episodesUrl}/${id}`);
  }
}
