import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Region } from '@world-bank/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EEXIST } from 'constants';

@Component({
  selector: 'wb-informer-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public regions$: Region[];

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this.regions$ = this._httpClient.get<[]>('http://api.worldbank.org/v2/region/?format=json')
  }
}
