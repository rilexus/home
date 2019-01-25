import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';


@Module({
  imports: [],
  controllers: [CvController],
  providers: [
    CvService,
  ],
})
export class CvModule {}
