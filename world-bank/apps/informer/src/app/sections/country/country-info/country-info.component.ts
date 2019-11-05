import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Country } from '@world-bank/models';

@Component({
  selector: 'wb-informer-country-info',
  templateUrl: './country-info.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CountryInfoComponent implements OnInit {

  @Input() data: Country;

  constructor() {}

  ngOnInit() {}
}
