import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { VacationOffer } from './interaces/vacation-offer.interface';
import { VacationOfferDto } from './dto/create-vacation-offer.dto';
import { VacationOfferPriceDto } from './dto/create-vacation-offer-price.dto';
import { VacationOfferPrice } from './interaces/vacation-offer-price.interface';

import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

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
    return await this.vacationOfferModel.find().populate({
                path: 'prices',
                model: this.vacationOfferPriceModel
            }).exec();
  }

  async addPrice(vacationOffer: Model<VacationOffer>, createVacationOfferPriceDto: VacationOfferPriceDto) {
    const createdVacationOfferPrice = new this.vacationOfferPriceModel(createVacationOfferPriceDto);
    return await createdVacationOfferPrice.save(() => {
      vacationOffer.prices.push(createdVacationOfferPrice);
      vacationOffer.save();
    });
  }

  async getPrice(vacationOffer: Model<VacationOffer>) {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(vacationOffer.url);

    const content = await page.content();
    const price = (vacationOffer.type === 'tui') ? this.getPriceTui(content) : this.getPriceItaka(content);
    await browser.close();

    return {
      price: price.toString(),
      date: new Date().toISOString(),
    }
  }

  private getPriceTui(content) {
    return cheerio('.price-value__amount', content).text().replace(/\s/g, '');
  }

  private getPriceItaka(content) {
    return cheerio('.pricesmall', content).first().text().replace('pln', '');
  }
}
