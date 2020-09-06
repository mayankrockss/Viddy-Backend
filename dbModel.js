import mongoose from 'mongoose';

const schema = mongoose.Schema({
    channel: String,
    description: String,
    song: String,
    likes: Number,
    messages: Number,
    shares: Number,
    url: String
});

export default mongoose.model('videoInfo', schema);