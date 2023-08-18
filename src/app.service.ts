import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Alessio!';
  }

  getSteve(): string {
    return 'Hello Steve!';
  }
}
