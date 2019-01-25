import { Document } from 'mongoose';

export interface VacationOfferPrice extends Document {
  readonly _id: string;
  readonly price: string;
  readonly date: string;
  readonly vacationOffer: string;
}
