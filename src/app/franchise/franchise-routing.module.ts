import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FranchisesComponent } from './franchises/franchises.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: FranchisesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class FranchiseRoutingModule {}
