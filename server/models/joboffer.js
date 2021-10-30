import mongoose from 'mongoose';

const jobofferSchema = mongoose.Schema({
    company: {type: String, required: true},
    companyname: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    programmer: {type: String},
    status: {type: String},
    percentage:{type: Number},
    price: {type: Number},
});

export default mongoose.model('JobOffer', jobofferSchema);
