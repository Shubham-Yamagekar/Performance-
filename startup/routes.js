const express = require("express");
const userRouter = require("../routes/routes");
const error = require("./../middleware/error");
const helmet = require("helmet");
const compression = require("compression");
const cors = require('cors');


module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    var router = express.Router();
    app.use("/api", router);
    app.use("/api", userRouter);

    app.use(error);

    app.use(helmet());
    app.use(compression());
};
