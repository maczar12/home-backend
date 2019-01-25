import * as mongoose from 'mongoose';

export const VacationOfferSchema = new mongoose.Schema({
  name: String,
  url: String,
  type: String,
  prices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VacationOfferPrice' }]
});
