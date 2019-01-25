import * as mongoose from 'mongoose';

export const VacationOfferPriceSchema = new mongoose.Schema({
  price: String,
  date: String,
  vacationOffer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VacationOfferModel' }]
});
