import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import {Country} from "@world-bank/models";

@Component({
  selector: 'wb-informer-regions-table',
  templateUrl: './regions-table.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RegionsTableComponent implements OnInit {

  @Input() data: Country[];
  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
