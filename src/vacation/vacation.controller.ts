import { Body, Controller, Get, Post } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationOfferDto } from './dto/create-vacation-offer.dto';
import { VacationOffer } from './interaces/vacation-offer.interface';

@Controller('vacation')
export class VacationController {
  constructor(private readonly vacationService: VacationService) {
  }

  @Post()
  async create(@Body() createCatDto: VacationOfferDto) {
    this.vacationService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<VacationOffer[]> {
    return this.vacationService.findAll();
  }

  @Get('show-current-prices')
  async showCurrentPrices(): Promise<any[]> {
    const vacationOffers = await this.vacationService.findAll();

    const offers = [];
    for (let offer of vacationOffers) {
      const priceObj = await this.vacationService.getPrice(offer);
      offers.push({name: offer.name, priceObj: priceObj });
    }

    return offers;
  }

}
