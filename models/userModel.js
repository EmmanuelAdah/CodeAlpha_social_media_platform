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
        minlength: [4, 'Password must be at least 4 characters'],
        maxLength: [20, 'Password must be less than  20 characters'],
        select: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);