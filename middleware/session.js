"use strict";

const jwt = require("jsonwebtoken");
const { jwtKey } = require("../const");

exports.createSession = createSession;
exports.isLive = isLive;

async function isLive(req, res, next) {
    var token = req.headers["x-token"];
    if (!token) {
        return res.status(401).send({
            success: false
        });
    }
    jwt.verify(token, jwtKey, function (err, decoded) {
        if (err) {
            return res.status(401).send({
                success: false
            });
        } else {
            req.user = decoded.user;
            next();
        }
    });
}

function createSession(user) {
    var token = jwt.sign(
        {
            user: user
        },
        jwtKey,
        { expiresIn: "36500d" }
    );
    return token;
}
