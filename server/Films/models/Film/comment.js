const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    commentText: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Comment', commentSchema);
