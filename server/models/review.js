import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    from: {type: String, required: true},
    photo: {type: String, required: true},
    to: {type: String, required: true},
    rating: {type: Number, required: true},
    review: {type:String, required: true},
});

export default mongoose.model('Review', reviewSchema);