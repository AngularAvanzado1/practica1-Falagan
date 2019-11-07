import {createAction, props} from '@ngrx/store';
import {Subscription, Subscriptions} from "@world-bank/models";

export const loadSubscriptionsStores = createAction(
  '[SubscriptionsStore] Load SubscriptionsStores'
);

export const addSubscription = createAction(
  '[Subscription] Add Subscription',
  props<{ newSubscription: Subscription }>()
);

export const removeSubscription = createAction(
  '[Subscription] Remove Subscription',
  props<{ countryId: number }>()
);

export const removeAllSubscriptions = createAction(
  '[Subscription] Remove All Subscriptions',
  props<{}>()
);




