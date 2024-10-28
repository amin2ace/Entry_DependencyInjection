import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplypower(watts: number) {
    return console.log(`Supplying ${watts} worth of power!!!`);
  }
}
