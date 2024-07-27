const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    aadharno:{
        type : String,
        required : true
    },
    otpvalidate :{
        type : String,
    },
    password :{
        type : String,
    }
});
const User = mongoose.model('User', userSchema);

module.exports = User;