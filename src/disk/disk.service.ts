import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(public powerService: PowerService) {}

  getData() {
    console.log('Getting Data');
    this.powerService.supplypower(15);
    return 'data!!';
  }
}
