
require("express-async-errors");
const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/init")();


const winston = require("./helper/logger");
process.on("uncaughtException", ex => {
    winston.error({ message: ex.message, meta: ex });
});

process.on("unhandledRejection", ex => {
    console.log("unhandledRejection", ex);
});

const server = app.listen(process.env.PORT || 7979, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
});
