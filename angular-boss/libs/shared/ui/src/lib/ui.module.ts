import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingsComponent } from './greetings/greetings.component';
import {DataModule} from "@a-boss/data";

@NgModule({
  imports: [CommonModule, DataModule],
  declarations: [GreetingsComponent],
  exports: [GreetingsComponent]
})
export class UiModule {}
