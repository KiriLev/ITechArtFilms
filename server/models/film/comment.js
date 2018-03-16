
module.exports = (Schema, model) => {
    const commentSchema = mongoose.Schema({
        user: {type: ObjectId, ref: 'User' },
        commentText: String,
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    });
    return mongoose.model('Comment'. commentSchema);
}