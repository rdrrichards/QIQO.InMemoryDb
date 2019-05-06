import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'episodes', pathMatch: 'full' },
  { path: 'episodes', loadChildren: './episode/episode.module#EpisodeModule' },
  { path: 'movies', loadChildren: './movie/movie.module#MovieModule' },
  { path: 'series', loadChildren: './series/series.module#SeriesModule' },
  { path: 'spells', loadChildren: './spell/spell.module#SpellModule' },
  { path: 'franchises', loadChildren: './franchise/franchise.module#FranchiseModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
