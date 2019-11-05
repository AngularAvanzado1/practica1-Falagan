import {ChangeDetectorRef, Component} from '@angular/core';
import {IHeaderData} from '@world-bank/models';
import {Constans} from '../assets/constans';
import {SwUpdate} from "@angular/service-worker";
import {ModalsService} from "./services/modals/modals.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {IModal} from "./services/modals/IModal";

@Component({
  selector: 'wb-informer-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public headerData: IHeaderData = Constans.HEADER_DATA;
  public modalData: IModal;
  title = 'Informer';

  constructor(private swUpdate: SwUpdate,
              private _modalsService: ModalsService,
              private _cdr: ChangeDetectorRef,
              private _router: Router) {
    this.checkVersionsUpdates();
  }

  private checkVersionsUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(data => console.log('update',data));
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = "Nueva Versión disponible";
          msg += `${appData.changelog}.`;
          msg += `Recargamos la app para disfrutar de la nueva versión?`;
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      })
    }

  }

  ngOnInit() {
    /**Servicio global de modales*/
    this._modalsService.get().subscribe(
      (next) => {
        this.modalData = next;
        this._cdr.detectChanges();
      }
    );
    /** Navigate Events */
    this._router.events.subscribe(next =>
      next instanceof NavigationStart ? this._modalsService.show('waiter') :
        next instanceof NavigationEnd ? this._modalsService.hide(250) : undefined
    );
  }
}
