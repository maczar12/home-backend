import { Injectable } from '@nestjs/common';
import * as cron from 'cron';
import { VacationService } from '../vacation/vacation.service';

@Injectable()
export class CronService {
  constructor(
    private readonly vacationService: VacationService,
  ) { }

  start() {
    const cronJob = new cron.CronJob('0 * * * * *', () => {
      console.log('---cron');
      this.vacationService.findAll().then(vacationOffer => {
        console.log('----vacationOffer', vacationOffer);
      })


    });

    cronJob.start();
  }
}
