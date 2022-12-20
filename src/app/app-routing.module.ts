import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'episodes', pathMatch: 'full' },
  { path: 'episodes', loadChildren: () => import('./episode/episode.module').then(m => m.EpisodeModule) },
  { path: 'movies', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
  { path: 'spells', loadChildren: () => import('./spell/spell.module').then(m => m.SpellModule) },
  { path: 'franchises', loadChildren: () => import('./franchise/franchise.module').then(m => m.FranchiseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
