const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        unique: true,
        minlength: [4, 'Username must be at least 4 characters'],
        maxLength: [20, 'username must be less than  20 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        select: false,
    },
    image: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg',
    },
    gender: {
        type: String,
        required: false,
        enum: ['male', 'female', 'other'],
        default: 'other',
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        select: false,
    },
    verificationCodeExpiry: {
        type: Date,
        select: false,
        expires: 120,
    },
    resetPasswordCode: {
        type: String,
        select: false,
        default: null,
        expires: 3600,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);