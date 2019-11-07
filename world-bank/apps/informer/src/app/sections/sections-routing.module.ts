import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionComponent} from "./region/region.component";
import {CountryComponent} from "./country/country.component";
import {SubscriptionsComponent} from "./subscriptions/subscriptions.component";


const routes: Routes = [
  {
    path: 'region/:code/:name',
    component: RegionComponent
  },
  {
    path: 'country/:id/:name',
    component: CountryComponent
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
