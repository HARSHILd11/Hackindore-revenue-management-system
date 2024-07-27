const mongoose = require("mongoose")
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    nationality: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    mobileVerified: {
        type: Boolean,
        default: false,
    },
    govIdInfo: {
        type: String
    },
    residentialAddress: {
        type: String,
    },
    idProof: {
        type: Buffer, // Store the scanned copy of ID proof as a buffer
    },
    occupation: {
        type: String,
    },
    preferredLanguage: {
        type: String,
    },
    alternateNumber: {
        type: String,
    },
    tncAccepted: {
        type: Boolean,

    },
});
const User = mongoose.model('User', userSchema);

module.exports = User;