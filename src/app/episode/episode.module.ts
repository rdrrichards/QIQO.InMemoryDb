import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [EpisodesComponent, EpisodeComponent],
  imports: [
    CommonModule
  ]
})
export class EpisodeModule { }
