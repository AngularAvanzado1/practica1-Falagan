import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { RouterModule } from '@angular/router';
import { RegionsTableComponent } from './regions-table/regions-table.component';


@NgModule({
  declarations: [RegionComponent, RegionsTableComponent],
  exports: [
    RegionsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RegionModule { }
