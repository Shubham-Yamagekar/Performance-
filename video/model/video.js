"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: {
        type: String
    },
    link: {
        type: String,
    }

});

module.exports = mongoose.model("videos", videoSchema);
