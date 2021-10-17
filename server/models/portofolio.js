import mongoose from 'mongoose';

const portofolioSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true}, 
    githubLink: {type: String, required: true},
});

export default mongoose.model('Portofolio', portofolioSchema);

