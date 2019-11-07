import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription, Subscriptions} from "@world-bank/models";
import * as SubscriptionActions from './subscriptions-store.actions';
import * as SubscriptionSelectors from './subscriptions-store.selectors';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private store: Store<Subscriptions>) {
  }

  public loadSubscriptions() {
    this.store.dispatch(SubscriptionActions.loadSubscriptionsStores());

  }

  public addSubscription(newSubscription: Subscription) {
    this.store.dispatch(SubscriptionActions.addSubscription({
      newSubscription: {...newSubscription}
    }))
  }

  public removeSubscription(countryId: number) {
    this.store.dispatch(SubscriptionActions.removeSubscription(
      {countryId: countryId}
    ))
  }

  public removeAllSubscriptions() {
    this.store.dispatch(SubscriptionActions.removeAllSubscriptions({}))
  }

  public getSubscriptionsList$(): Observable<Subscription[]> {
    return this.store.select(SubscriptionSelectors.getSubscriptionsList)
  }

}
