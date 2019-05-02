import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EpisodesComponent },
      { path: ':id', component: EpisodeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {}
