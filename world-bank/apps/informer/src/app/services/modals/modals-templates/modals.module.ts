import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalsComponent} from "./modals.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports:[ModalsComponent]
})
export class ModalsModule { }
