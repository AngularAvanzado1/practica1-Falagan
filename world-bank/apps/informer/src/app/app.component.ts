import {Component} from '@angular/core';
import {IHeaderData} from '@world-bank/models';
import {Constans} from '../assets/constans';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'wb-informer-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public headerData: IHeaderData = Constans.HEADER_DATA;
  title = 'Informer';

  constructor(private swUpdate: SwUpdate) {
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
}
