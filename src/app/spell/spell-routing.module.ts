import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpellsComponent } from './spells/spells.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: SpellsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SpellRoutingModule {}
