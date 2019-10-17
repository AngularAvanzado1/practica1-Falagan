import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Region } from '@world-bank/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wb-informer-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  
  public regions$: Observable<Region[]>;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this.regions$ = this._httpClient
      .get<[]>('http://api.worldbank.org/v2/region/?format=json')
      .pipe(map(this.transformData));
  }

  private transformData(infoRegions): Region[] {
    const regions: Region[] = infoRegions[1].filter(region => region.id != '');
    return regions;
  }
}
