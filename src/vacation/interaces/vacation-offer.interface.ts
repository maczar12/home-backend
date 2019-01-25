import { Document } from 'mongoose';

export interface VacationOffer extends Document {
  readonly name: string;
  readonly url: string;
  readonly type: string;
  readonly prices: any[];
}
