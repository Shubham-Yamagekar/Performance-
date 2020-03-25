const logger = require("./../helper/logger");
const Constant = require("./../const.js");

module.exports = function (err, req, res, next) {
    let log = {
        message: Constant.error.internalServerMsg,
        error: err.toString()
    };
    logger.error({ message: err, meta: err });
    res.status(500).send(log);
};
