import {ArgumentsHost, Catch, ExceptionFilter, NotFoundException} from "@nestjs/common";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.sendFile("index.html");
    }
}