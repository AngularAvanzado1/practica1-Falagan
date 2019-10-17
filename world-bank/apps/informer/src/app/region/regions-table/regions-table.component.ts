import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wb-informer-regions-table',
  templateUrl: './regions-table.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RegionsTableComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
