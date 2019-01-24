import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VacationOffer } from './interaces/vacation-offer.interface';
import { VacationOfferDto } from './dto/create-vacation-offer.dto';

@Injectable()
export class VacationService {
  constructor(@InjectModel('VacationOfferModel') private readonly vacationOfferModel: Model<VacationOffer>) {}

  async create(createVacationOfferDto: VacationOfferDto): Promise<VacationOffer> {
    const createdVacationOffer = new this.vacationOfferModel(createVacationOfferDto);
    return await createdVacationOffer.save();
  }

  async findAll(): Promise<VacationOffer[]> {
    return await this.vacationOfferModel.find().exec();
  }

}
