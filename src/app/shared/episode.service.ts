import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../model/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private episodesUrl = 'api/episodes';
  constructor(private httpsClient: HttpClient) { }
  getEpisodes() {
    this.httpsClient.get<Episode[]>(this.episodesUrl);
  }
  getEpisode(id: number) {
    this.httpsClient.get<Episode>(`${this.episodesUrl}/?id=${id}`);
  }
}
