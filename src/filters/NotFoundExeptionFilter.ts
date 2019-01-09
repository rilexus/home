import {ArgumentsHost, Catch, ExceptionFilter, Logger, NotFoundException} from "@nestjs/common";
import {resolve} from "path";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        Logger.log('Url not found', 'NotFoundExceptionFilter');
	      response.sendFile(resolve('./client/build/index.html'));
    }
}