import * as mongoose from 'mongoose';

export const VacationOfferSchema = new mongoose.Schema({
  url: String,
  type: String,
});
