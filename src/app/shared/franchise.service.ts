import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Franchise } from '../model/franchise';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  private franchisesUrl = 'api/franchises';
  private moviesUrl = 'api/movies';
  constructor(private httpsClient: HttpClient) { }
  getFranchises(): Observable<Franchise[]>  {
    return this.httpsClient.get<Franchise[]>(this.franchisesUrl);
  }
  getFranchiseMovies(id: number): Observable<Movie[]>  {
    return this.httpsClient.get<Movie[]>(`${this.moviesUrl}/?franchiseId=${id}`);
  }
}
