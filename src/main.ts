import {FastifyAdapter, NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";
import 'dotenv/config';
import * as path from "path";
import {NotFoundExceptionFilter} from "./filters/NotFoundExeptionFilter";
declare const module: any;

const port = process.env.PORT || 8080;

async function bootstrap() {
 
	const app = await NestFactory.create(AppModule, new FastifyAdapter());
	
	
	const url = path.resolve(`client/build`);
	app.useStaticAssets({ // serve frontend files through this folder
		root: path.resolve(url)
	});
	
	
	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
	
	Logger.log(`The server is running: http://localhost:${port}`, `Bootstrap`);
	Logger.log(`assets serving from: ${url}`, `Bootstrap`);
	
	app.useGlobalFilters(new NotFoundExceptionFilter()); // catch 404 and return index.html
	await app.listen(port);
	
}
bootstrap();
