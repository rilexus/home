import {Get, Controller, Res, Logger, Post, Body} from '@nestjs/common';
import { CvService } from './cv.service';
import * as path from "path";
import {resolve} from "path";

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get()
  root(@Res() res){
	  res.sendFile(__dirname + '/index.html');
  }
	
	@Post('/download')
	async download(@Body('query') query: any, @Res() res){
  	Logger.log('reached','CvController');
  	
  	const valid = await this.cvService.checkPassword(query);
  	console.log(valid);
  	
  	if (valid){
  		res.setHeader("Content-Disposition", ["attachment", "filename=Lebenslauf.pdf"]);
		  // res.setHeader("Content-Type", 'application/pdf');
		  res.setHeader("Content-Type", 'application/octet-stream');
			res.download(resolve('client/build/documents/Lebenslauf.pdf'));
	  } else {
		  res.status(403);
		  res.send();
	  }
		
	}
}