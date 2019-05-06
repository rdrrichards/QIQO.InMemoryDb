import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranchisesComponent } from './franchises/franchises.component';
import { FranchiseRoutingModule } from './franchise-routing.module';

@NgModule({
  declarations: [FranchisesComponent],
  imports: [
    CommonModule,
    FranchiseRoutingModule
  ]
})
export class FranchiseModule { }
