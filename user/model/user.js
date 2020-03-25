"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }


});

module.exports = mongoose.model("users", userSchema);
