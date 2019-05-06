import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../model/episode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  constructor(private httpsClient: HttpClient) { }
  getEpisodes(): Observable<Episode[]>  {
    return this.httpsClient.get<Episode[]>(environment.episodesUrl);
  }
  getEpisode(id: number): Observable<Episode> {
    return this.httpsClient.get<Episode>(`${environment.episodesUrl}/${id}`);
  }
}
