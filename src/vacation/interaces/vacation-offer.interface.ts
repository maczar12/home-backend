import { Document } from 'mongoose';

export interface VacationOffer extends Document {
  readonly _id: string;
  readonly name: string;
  readonly url: string;
  readonly type: string;
  readonly prices: any[];
}
