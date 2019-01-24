import { Document } from 'mongoose';

export interface VacationOffer extends Document {
  readonly url: string;
  readonly type: string;
}
