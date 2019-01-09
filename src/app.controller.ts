import {Get, Controller, Res, Logger} from '@nestjs/common';
import { AppService } from './app.service';
import * as path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res){
	  //res.sendFile(path.resolve('build/index.html'));
	  //res.sendFile("index.html");
	  res.sendFile(__dirname + '/index.html');
  }
	
	@Get('/test')
	async test(){
  	Logger.log('reached','AppController');
		return {data: true};
	}
}