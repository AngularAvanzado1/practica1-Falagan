import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Country, Region } from '@world-bank/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _httpClient: HttpClient, private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.regionCode= this._activatedRoute.snapshot.params['code'];
    this.regionName= this._activatedRoute.snapshot.params['name'];

    this.countries$ = this._httpClient
      .get<[]>(`http://api.worldbank.org/v2/region/${this.regionCode}/country?per_page=1000&format=json`)
      .pipe(map(this.transformData));
  }

  private transformData(infoRegion): Country[] {
    const countries: Country[] = infoRegion[1];
    return countries;
  }

}
