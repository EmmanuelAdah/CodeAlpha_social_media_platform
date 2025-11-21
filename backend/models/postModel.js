const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    image: {
        type: String,
        required: false,

    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
}, {timestamps: true });

module.exports = mongoose.model('Post', postSchema);