import { Module } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VacationOfferSchema } from './schemas/vacation-offer.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'VacationOfferModel', schema: VacationOfferSchema}])],
  providers: [VacationService],
  controllers: [VacationController],
})
export class VacationModule {
}
