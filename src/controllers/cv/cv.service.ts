import { Injectable } from '@nestjs/common';

@Injectable()
export class CvService {
  
  root(): string {
    return 'Hello World!';
  }
  
  async checkPassword(password: string){
    return password === '4242';
  }
}
