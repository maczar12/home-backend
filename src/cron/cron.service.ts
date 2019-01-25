import { Injectable } from '@nestjs/common';
import * as cron from 'cron';
import { VacationService } from '../vacation/vacation.service';

@Injectable()
export class CronService {
  constructor(
    private readonly vacationService: VacationService,
  ) {
  }

  async start() {
    const cronJob = new cron.CronJob('0 * * * * *', () => {
      console.log('---cron');
      this.vacationService.findAll().then(vacationOffer => {
        console.log('----vacationOffer', vacationOffer);
        this.vacationService.addPrice({
          price: '11.11',
          date: '2222',
          vacationOffer: '5c48ac282365dc1930fef354',
        });

      });
    });

    cronJob.start();
  }
}
