const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        FullName: String,
        Email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: 'Email is required'
        },
        Password: {
            type: String,
            minlength: 4,
            maxlength: 20,
            required: "Password is required"
        },
        Age: Number,
        InsertedAt: {
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('user', userSchema);

module.exports = { User }