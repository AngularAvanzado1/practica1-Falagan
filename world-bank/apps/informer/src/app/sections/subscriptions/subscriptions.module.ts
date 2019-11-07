import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
import {RouterModule} from "@angular/router";
import { SubscriptionsTableComponent } from './subscriptions-table/subscriptions-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSubscriptionsStore from './subscriptions-store/subscriptions-store.reducer';
import { SubscriptionsStoreEffects } from './subscriptions-store/subscriptions-store.effects';




@NgModule({
  declarations: [SubscriptionsComponent, SubscriptionsTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromSubscriptionsStore.subscriptionsStoreFeatureKey, fromSubscriptionsStore.reducer),
    EffectsModule.forFeature([SubscriptionsStoreEffects])
  ]
})
export class SubscriptionsModule { }
