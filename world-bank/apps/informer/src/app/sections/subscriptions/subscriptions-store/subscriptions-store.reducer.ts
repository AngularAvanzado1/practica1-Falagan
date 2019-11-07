import {Action, createReducer, on} from '@ngrx/store';
import * as SubscriptionsStoreActions from './subscriptions-store.actions';
import {Subscriptions} from "@world-bank/models";

export const subscriptionsStoreFeatureKey = 'subscriptionsStore';

export interface SubscriptionsState {
  subscriptions: Subscriptions;
}

export const initialState: SubscriptionsState = {
  subscriptions: {list: []}
};

const subscriptionsStoreReducer = createReducer(
  initialState,

  on(SubscriptionsStoreActions.loadSubscriptionsStores, state => state),

  on(SubscriptionsStoreActions.removeAllSubscriptions, state => {
    return {
      ...state,
      subscriptions: {
        ...state.subscriptions,
        list: []
      }
    }
  }),

  on(SubscriptionsStoreActions.removeSubscription, (state, {countryId}) => {
    return {
      ...state,
      subscriptions: {
        ...state.subscriptions,
        list: [...state.subscriptions.list.filter((item) => {
          return item.countryId !== countryId
        })]
      }
    }
  }),

  on(SubscriptionsStoreActions.addSubscription, (state, {newSubscription}) => {
    return {
      ...state,
      subscriptions: {
        ...state.subscriptions,
        list: [...state.subscriptions.list, newSubscription]
      }
    }
  }),

);

export function reducer(state: SubscriptionsState | undefined, action: Action) {
  return subscriptionsStoreReducer(state, action);
}
