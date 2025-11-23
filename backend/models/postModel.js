const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    body: {
        type: String,
        required: [true, 'Post is required'],
        trim: true,
    },
    image: {
        type: String,
        required: false,
    },
    like: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
    }
}, {timestamps: true });

module.exports = mongoose.model('Post', postSchema);