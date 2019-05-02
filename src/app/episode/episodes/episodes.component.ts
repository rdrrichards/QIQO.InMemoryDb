import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/shared/episode.service';
import { Episode } from 'src/app/model/episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: Episode[] = [];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.episodeService.getEpisodes().subscribe(episodes => {
      this.episodes = episodes;
    });
  }

}
