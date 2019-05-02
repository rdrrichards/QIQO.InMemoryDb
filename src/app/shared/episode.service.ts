import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../model/episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private episodesUrl = 'api/episodes';
  constructor(private httpsClient: HttpClient) { }
  getEpisodes(): Observable<Episode[]>  {
    return this.httpsClient.get<Episode[]>(this.episodesUrl);
  }
  getEpisode(id: number): Observable<Episode> {
    return this.httpsClient.get<Episode>(`${this.episodesUrl}/${id}`);
  }
}
