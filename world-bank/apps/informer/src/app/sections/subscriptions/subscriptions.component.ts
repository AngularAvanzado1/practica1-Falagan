import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Subscription} from "@world-bank/models";
import {SubscriptionsService} from "./subscriptions-store/subscriptions.service";

@Component({
  selector: 'wb-informer-subscriptions',
  templateUrl: './subscriptions.component.html',
  styles: []
})
export class SubscriptionsComponent implements OnInit {

  public subscriptions$: Observable<Subscription[]>;

  constructor(private _subscriptionService: SubscriptionsService) {
  }

  ngOnInit() {
    this.subscriptions$ = this._subscriptionService.getSubscriptionsList$();
  }

  public removeSubscription(countryId: number) {
   this._subscriptionService.removeSubscription(countryId);
  }

  public removeAllSubscriptions() {
    this._subscriptionService.removeAllSubscriptions();
  }

}
