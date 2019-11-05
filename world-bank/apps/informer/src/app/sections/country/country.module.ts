import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { RouterModule } from '@angular/router';
import {CountryInfoComponent} from "./country-info/country-info.component";


@NgModule({
  declarations: [CountryComponent, CountryInfoComponent],
  exports: [
    CountryInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CountryModule { }
