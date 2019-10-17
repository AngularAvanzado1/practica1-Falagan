import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { RouterModule } from '@angular/router';
import { ContryInfoComponent } from './contry-info/contry-info.component';


@NgModule({
  declarations: [CountryComponent, ContryInfoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CountryModule { }
