import {Component, OnInit} from '@angular/core';
import Greetings from "../../../../domain/src/lib/models/greetings.interface";
import {GreetingsService} from "@a-boss/data";


@Component({
  selector: 'ab-ui-greetings',
  template: `
    <p>
      {{ theGreeting.message }}
    </p>
  `,
  styles: []
})
export class GreetingsComponent implements OnInit {

  public theGreeting: Greetings = {message: 'Hello World!'};

  constructor(private greetingsService: GreetingsService) {
  }

  ngOnInit() {
    this.greetingsService.getGreettings$().subscribe(this.appendApiMessage);
  }

  private appendApiMessage = (apiGreetings: Greetings) => (
    this.theGreeting.message += ` and ${apiGreetings.message}`);


}
