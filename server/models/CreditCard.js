import mongoose from 'mongoose';

const CreditCardSchema = mongoose.Schema({
    name: {type: String, required: true},
    bank: {type: String, required: true},
    username: {type: String, required: true},
    IBAN: {type: String, required: true},
});

export default mongoose.model('CreditCard', CreditCardSchema);
