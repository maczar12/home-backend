import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { VacationModule } from '../vacation/vacation.module';

@Module({
  imports: [VacationModule],
  providers: [CronService],
})
export class CronModule {}
