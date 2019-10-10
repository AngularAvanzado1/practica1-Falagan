import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {Greetings} from "@a-boss/domain";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Greetings {
    return this.appService.getData();
  }
}
