import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Region } from '@world-bank/models';
import { Observable } from 'rxjs';
import { WorldBankService } from '../services/world-bank.service';

@Component({
  selector: 'wb-informer-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public regions$: Observable<Region[]>;

  constructor(private _worldBankService: WorldBankService) {}

  ngOnInit() {
    this.regions$ = this._worldBankService.getContinentalRegions();
  }
}
