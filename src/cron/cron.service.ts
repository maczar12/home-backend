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
      this.vacationService.findAll().then(vacationOffers => {
        console.log('----vacationOffer', vacationOffers);
        vacationOffers.forEach(async (offer) => {
          const price = await this.vacationService.getPrice(offer);
          this.vacationService.addPrice(offer, price);
        });
      });
    });

    cronJob.start();
  }
}
