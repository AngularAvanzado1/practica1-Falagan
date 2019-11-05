import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Country, Region } from '@world-bank/models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WorldBankService } from '../../services/world-bank.service';

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
    private _worldBankService: WorldBankService
  ) {}

  ngOnInit() {
    this.regionCode = this._activatedRoute.snapshot.params['code'];
    this.regionName = this._activatedRoute.snapshot.params['name'];
    this.countries$ = this._worldBankService.getRegions(this.regionCode);
  }

}
