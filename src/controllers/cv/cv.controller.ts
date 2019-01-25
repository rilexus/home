import {Get, Controller, Res, Logger, Post, Body} from '@nestjs/common';
import { CvService } from './cv.service';
import * as path from "path";
import {resolve} from "path";

@Controller('cv')
export class CvController {
  constructor(private readonly appService: CvService) {}

  @Get()
  root(@Res() res){
	  res.sendFile(__dirname + '/index.html');
  }
	
	@Post('/download')
	async download(@Body('query') query: any, @Res() res){
  	Logger.log('reached','CvController');
  	console.log(__dirname + 'client/build/documents/Lebenslauf.pdf');
		res.sendFile(__dirname + '../documents/Lebenslauf.pdf');
	}
}