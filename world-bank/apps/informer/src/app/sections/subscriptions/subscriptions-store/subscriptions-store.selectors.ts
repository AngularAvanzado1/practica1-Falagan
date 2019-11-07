import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SubscriptionsState, subscriptionsStoreFeatureKey} from "./subscriptions-store.reducer";

export const getSubscriptionsStoreState = createFeatureSelector<SubscriptionsState>(
  subscriptionsStoreFeatureKey
);

export const getSubscriptionsList = createSelector(
  getSubscriptionsStoreState,
  (state: SubscriptionsState) => state.subscriptions.list
);
