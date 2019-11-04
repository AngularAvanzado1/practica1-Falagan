import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import {RegionModule} from "./region/region.module";
import {CountryModule} from "./country/country.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    RegionModule,
    CountryModule
  ]
})
export class SectionsModule { }
