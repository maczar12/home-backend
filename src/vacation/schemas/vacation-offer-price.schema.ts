import * as mongoose from 'mongoose';

export const VacationOfferPriceSchema = new mongoose.Schema({
  _id: new mongoose.Types.ObjectId(),
  price: String,
  date: String,
  vacationOffer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VacationOffer' }]
});
