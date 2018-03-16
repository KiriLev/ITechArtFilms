module.exports = (mongoose) => {
    const userSchema = new mongoose.Schema({
        username: { type: String, required: true, unique: true },
        hashedPassword: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
    });
    
    return mongoose.model('User', userSchema);
}