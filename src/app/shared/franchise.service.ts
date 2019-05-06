import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Franchise } from '../model/franchise';
import { Movie } from '../model/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  constructor(private httpsClient: HttpClient) { }
  getFranchises(): Observable<Franchise[]>  {
    return this.httpsClient.get<Franchise[]>(environment.franchisesUrl);
  }
  getFranchiseMovies(id: number): Observable<Movie[]>  {
    return this.httpsClient.get<Movie[]>(`${environment.moviesUrl}/?franchiseId=${id}`);
  }
}
