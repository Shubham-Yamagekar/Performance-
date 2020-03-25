"use strict";

const winston = require("winston");
const MongoDB = require("winston-mongodb").MongoDB;
const Constant = require("./../const.js");

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ colorized: true, prettyPrint: true }),
        new winston.transports.File({ filename: "error.log" }),
        new winston.transports.MongoDB({
            db: Constant.localDBUrl,
            level: "error"
        })
    ]
});

module.exports = logger;
