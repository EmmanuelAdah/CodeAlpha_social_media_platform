const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post',
    },
    userId: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: 2,
        maxLength: 50,
    },
    comment:  {
        type: String,
        required: [true, 'comment is required'],
        trim: true,
        minLength: 2,
        maxLength: 2000,
    },
    like: {
        type: Number,
        default: 0,
    }
}, {timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);