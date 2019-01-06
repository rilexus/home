import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {APP_FILTER} from "@nestjs/core";
import {NotFoundExceptionFilter} from "./filters/NotFoundExeptionFilter";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
	  // {
		//   provide: APP_FILTER,
		//   useClass: NotFoundExceptionFilter, // return always the index.html in case of 404 (page not found/unknown url)
	  // },
  ],
})
export class AppModule {}
