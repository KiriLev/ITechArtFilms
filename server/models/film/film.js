module.exports = (mongoose) => {
    const filmSchema = mongoose.Schema({
        title: String,
        categories: [String],
        releaseDate: Date,
        duration: Number,
        rating: Number,
        comments: [ {type: ObjectId, ref: 'Comment' }],
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    });
    return mongoose.model('Film'. filmSchema);
}