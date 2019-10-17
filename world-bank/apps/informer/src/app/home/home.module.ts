import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContinentalTableComponent } from './continental-table/continental-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, ContinentalTableComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
