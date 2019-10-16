import { Component, OnInit, Input } from '@angular/core';
import { IHeaderData } from 'libs/models/src/lib/IHeaderData';

@Component({
  selector: 'lib-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css'
]})
export class HeaderComponent implements OnInit {
  
  @Input() public data:IHeaderData;

  constructor() { }

  ngOnInit() {
  }

}
