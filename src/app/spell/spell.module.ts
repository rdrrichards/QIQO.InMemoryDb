import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsComponent } from './spells/spells.component';
import { SpellRoutingModule } from './spell-routing.module';

@NgModule({
  declarations: [SpellsComponent],
  imports: [
    CommonModule,
    SpellRoutingModule
  ]
})
export class SpellModule { }
