const logger = require("./../helper/logger");
const Constant = require("./../const.js");

module.exports = function () {
    const connectMongo = () => {
        const mongoose = require("mongoose");
        return new Promise((resolve, reject) => {
            try {
                mongoose.connect(Constant.cloudDBUrl, {
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    useCreateIndex: true
                });
                mongoose.connection.on("connected", () => {
                    logger.info("DB Connected");
                });
                mongoose.connection.on("error", err =>
                    logger.error({ message: Constant.error.mongooseErrorMsg, meta: err })
                );
            } catch (ex) {
                logger.error({ message: Constant.error.mongooseErrorMsg, meta: ex });
            }
        });
    };

    connectMongo().then(data => {
        console.log(data);
    });
};
