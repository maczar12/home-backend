import * as mongoose from 'mongoose';

export const VacationOfferSchema = new mongoose.Schema({
  _id: new mongoose.Types.ObjectId(),
  name: String,
  url: String,
  type: String,
  prices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VacationOfferPrice' }]
});
