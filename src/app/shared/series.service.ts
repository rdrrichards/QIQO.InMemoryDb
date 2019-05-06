import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../model/series';
import { Episode } from '../model/episode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private httpsClient: HttpClient) { }
  getSeries(): Observable<Series[]>  {
    return this.httpsClient.get<Series[]>(environment.seriesUrl);
  }
  getSeriesEpisodes(id: number): Observable<Episode[]>  {
    return this.httpsClient.get<Episode[]>(`${environment.episodesUrl}/?seriesId=${id}`);
  }
}
