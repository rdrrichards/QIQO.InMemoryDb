import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: MoviesComponent },
      { path: ':id', component: MovieComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule {}
