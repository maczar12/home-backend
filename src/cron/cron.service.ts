import { Injectable } from '@nestjs/common';
import * as cron from 'cron';

@Injectable()
export class CronService {

  start() {
    console.log('--process.env', process.env);
    const cronJob = new cron.CronJob('0 * * * * *', () => {
      console.log('---cron');
    });

    cronJob.start();
  }
}
