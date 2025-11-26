const mongoose = require('mongoose')

const followerModel = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Product name is required'],
        minlength: 3,
        maxlength: 200,
        unique: true,
        trim: true,
        ref: "User",
    },
    username: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 2,
        maxLength: 50,
        trim: true
    },
    image: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg',
        trim: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Follower', followerModel);
