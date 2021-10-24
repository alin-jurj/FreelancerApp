import mongoose from 'mongoose';

const complaintSchema = mongoose.Schema({
    from: {type: String, required: true},
    against: {type: String, required: true},
    reason: {type:String, required: true},
});

export default mongoose.model('Complaint', complaintSchema);