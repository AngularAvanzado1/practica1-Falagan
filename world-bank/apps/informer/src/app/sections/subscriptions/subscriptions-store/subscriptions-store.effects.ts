import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as SubscriptionsStoreActions from './subscriptions-store.actions';
import {initialState} from "./subscriptions-store.reducer";


@Injectable()
export class SubscriptionsStoreEffects {


  loadSubscriptionsStores$ = createEffect(() => this.actions$.pipe(
    ofType(SubscriptionsStoreActions.loadSubscriptionsStores),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
