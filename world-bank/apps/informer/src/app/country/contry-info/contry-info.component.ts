import { Component, OnInit, Input } from '@angular/core';
import { Country } from '@world-bank/models';

@Component({
  selector: 'wb-informer-contry-info',
  templateUrl: './contry-info.component.html',
  styles: []
})
export class ContryInfoComponent implements OnInit {
  @Input() data: Country;

  constructor() {}

  ngOnInit() {}
}
