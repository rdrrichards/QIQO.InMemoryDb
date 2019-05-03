import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeriesListComponent } from './series-list/series-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SeriesListComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SeriesRoutingModule {}
