import {FastifyAdapter, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";
import 'dotenv/config';
import * as path from "path";
import {NotFoundExceptionFilter} from "./filters/NotFoundExeptionFilter";
declare const module: any;

const port = process.env.PORT || 8080;

async function bootstrap() {
	
	const app = await NestFactory.create(AppModule);
	
	const url = path.resolve(`client/build`);
	console.log(url)
	app.useStaticAssets(url);
	
	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
	
	Logger.log(`The server is running on port: ${5000}`, `Bootstrap`);
	Logger.log(`assets serving from: ${url}`, `Bootstrap`);
	
	
	app.useGlobalFilters(new NotFoundExceptionFilter()); // catch 404 and return index.html
	await app.listen(port);
	
	
	
}
bootstrap();
