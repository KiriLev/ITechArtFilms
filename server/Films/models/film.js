
const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    title: String,
    description: String,
    picLinks: [{ type: String }],
    releaseDate: Date,
    rating: Number,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Film', filmSchema);
