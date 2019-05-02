import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from 'src/app/shared/episode.service';
import { Episode } from 'src/app/model/episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episode: Episode;
  constructor(private activeRoute: ActivatedRoute, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const id = +params.id;
      this.episodeService.getEpisode(id).subscribe(episode => {
        this.episode = episode;
      });
    });
  }

}
