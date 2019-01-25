import { Document } from 'mongoose';

export interface VacationOfferPrice extends Document {
  readonly price: string;
  readonly date: string;
  readonly vacationOffer: string;
}
