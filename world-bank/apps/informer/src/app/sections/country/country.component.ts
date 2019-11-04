import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '@world-bank/models';
import { ActivatedRoute } from '@angular/router';
import { WorldBankService } from '../../../services/world-bank.service';

@Component({
  selector: 'wb-informer-country',
  templateUrl: './country.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {
  public country$: Observable<Country> = null;
  private countryCode: string;
  public countryName: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _worldBankService: WorldBankService
  ) {}

  ngOnInit() {
    this.countryCode = this._activatedRoute.snapshot.params['id'];
    this.countryName = this._activatedRoute.snapshot.params['name'];
    this.country$ = this._worldBankService.getCountry(this.countryCode);
  }
}
