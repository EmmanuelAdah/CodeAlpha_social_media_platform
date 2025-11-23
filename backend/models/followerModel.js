import mongoose from "mongoose";


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
    description: {
        type: String,
        required: [true, 'Product description is required'],
        minlength: 5,
        maxlength: 10000,
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Product image is required'],
        minlength: 5,
        maxlength: 10000,
        trim: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Follower', followerModel);