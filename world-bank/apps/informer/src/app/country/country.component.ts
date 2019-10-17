import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, Region } from '@world-bank/models';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wb-informer-country',
  templateUrl: './country.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {

  public country$: Observable<Country>;
  private countryCode: string;
  public countryName: string;

  constructor(private _httpClient: HttpClient, private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.countryCode = this._activatedRoute.snapshot.params['id'];
    this.countryName = this._activatedRoute.snapshot.params['name'];

    this.country$ = this._httpClient
      .get<Country>(`http://api.worldbank.org/V2/country/${this.countryCode}?format=json`)
      .pipe(map(this.transformData));
  }

  private transformData(infoCountry): Country {
    const country: Country = infoCountry[1];
    console.log(country);
    return country;
  }

}
