import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wb-informer-continental-table',
  templateUrl: './continental-table.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinentalTableComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
