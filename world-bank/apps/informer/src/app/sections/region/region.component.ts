import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Country, Region, Subscription} from '@world-bank/models';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { WorldBankService } from '../../services/world-bank.service';
import {SubscriptionsService} from "../subscriptions/subscriptions-store/subscriptions.service";
import {ModalsService} from "../../services/modals/modals.service";

@Component({
  selector: 'wb-informer-region',
  templateUrl: './region.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  public countries$: Observable<Country[]>;
  private regionCode: string;
  public regionName: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _worldBankService: WorldBankService,
    private _subscriptionService: SubscriptionsService,
    private _modalsService: ModalsService
  ) {}

  ngOnInit() {
    this.regionCode = this._activatedRoute.snapshot.params['code'];
    this.regionName = this._activatedRoute.snapshot.params['name'];
    this.countries$ = this._worldBankService.getRegions(this.regionCode);
  }

  public addSubscription(country: Country){
    const newSubscription: Subscription = {
      countryId: country.id,
      countryName: country.name
    };
    this._subscriptionService.addSubscription(newSubscription);
    this._modalsService.show('info', 'Subscripción añadida.');
  }

}
