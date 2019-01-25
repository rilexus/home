import {Get, Controller, Res, Logger} from '@nestjs/common';
import { AppService } from './app.service';
import * as path from "path";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res){
    Logger.log('serve index.html','AppController');
    console.log('AppController main url')
	  res.sendFile(__dirname + '/index.html');
  }
	
	@Get('/test')
	async test(){
  	Logger.log('reached','CvController');
		return {data: true};
	}
}