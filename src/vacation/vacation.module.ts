import { Module } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VacationOfferSchema } from './schemas/vacation-offer.schema';
import { VacationOfferPriceSchema } from './schemas/vacation-offer-price.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'VacationOfferModel', schema: VacationOfferSchema},
      {name: 'VacationOfferPriceModel', schema: VacationOfferPriceSchema},
    ])],
  providers: [VacationService],
  controllers: [VacationController],
})
export class VacationModule {
}
