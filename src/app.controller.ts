import {Get, Controller, Res} from '@nestjs/common';
import { AppService } from './app.service';
import * as path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res){
	  //res.sendFile(path.resolve('build/index.html'));
	  res.sendFile("index.html");
  }
}