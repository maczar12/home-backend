import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VacationOffer } from './interaces/vacation-offer.interface';
import { VacationOfferDto } from './dto/create-vacation-offer.dto';
import { VacationOfferPriceDto } from './dto/create-vacation-offer-price.dto';
import { VacationOfferPrice } from './interaces/vacation-offer-price.interface';

@Injectable()
export class VacationService {
  constructor(
    @InjectModel('VacationOfferModel') private readonly vacationOfferModel: Model<VacationOffer>,
    @InjectModel('VacationOfferPriceModel') private readonly vacationOfferPriceModel: Model<VacationOfferPrice>,
  ) {}

  async create(createVacationOfferDto: VacationOfferDto): Promise<VacationOffer> {
    const createdVacationOffer = new this.vacationOfferModel(createVacationOfferDto);
    return await createdVacationOffer.save();
  }

  async findAll(): Promise<VacationOffer[]> {
    return await this.vacationOfferModel.find().exec();
  }

  async addPrice(createVacationOfferPriceDto: VacationOfferPriceDto) {
    const createdVacationOfferPrice = new this.vacationOfferPriceModel(createVacationOfferPriceDto);
    return await createdVacationOfferPrice.save().populate('vacationOffer').exec();
  }

}
