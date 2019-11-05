import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ModalsService } from '../modals.service';
import { IModal } from '../IModal';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.sass'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeout-animation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ModalsComponent implements OnInit {


  @Input() public modalData: IModal;
  public open: boolean;

  constructor(private _modalsService: ModalsService) {
    this.open = false;
  }

  ngOnInit() {}

  /**Cerrar modal desde el botón de la propia modal*/
  public closeModal() {
    this._modalsService.hide();
  }


}

