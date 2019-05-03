import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../model/series';
import { Episode } from '../model/episode';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private seriesUrl = 'api/series';
  private episodesUrl = 'api/episodes';
  constructor(private httpsClient: HttpClient) { }
  getSeries(): Observable<Series[]>  {
    return this.httpsClient.get<Series[]>(this.seriesUrl);
  }
  getSeriesEpisodes(id: number): Observable<Episode[]>  {
    return this.httpsClient.get<Episode[]>(`${this.episodesUrl}/?seriesId=${id}`);
  }
}
