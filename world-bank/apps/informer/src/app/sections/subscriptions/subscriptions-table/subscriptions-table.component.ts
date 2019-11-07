import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from "@world-bank/models";

@Component({
  selector: 'wb-informer-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styles: []
})
export class SubscriptionsTableComponent implements OnInit {

  @Input() data: Subscription[];
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
