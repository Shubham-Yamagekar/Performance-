
const userDao = require("../dao/user");
const Constant = require("../../const");
const session = require("../../middleware/session");
const utility = require("../../utility");

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.logout = logout;



async function registerUser(req, res) {
    body = req.body
    if (
        !body.fullName ||
        !body.email ||
        !userDao.validateEmail(body.email)
    ) {
        return {
            success: false,
            code: 400,
            message: Constant.error.badRequest
        };
    }


    let { found, user } = await userDao.findByEmail(body.email);
    if (found) {
        return {
            success: false,
            code: 409,
            message: Constant.error.userAlreadyExist
        };

    }
    else {
        if (body.password) {
            body.password = await utility.getHashPassword(
                body.password
            );
        }
        let { created, user } = await userDao.createUser(body.fullName, body.email, body.password);
        res.status(200).send({
            success: true,
            user,
            token: session.createSession(user)
        });
    }
}



async function loginUser(req, res) {
    const body = req.body;
    if (body) {
        let dict = await userDao.findByEmail(body.email);
        if (dict.found) {
            let isValid = await utility.comparePassword(body.password, dict.user);
            const token = session.createSession(dict.user);
            if (isValid.success) {
                dict.token = token;
                res.status(200).send(dict);
            } else {
                return res
                    .status(401)
                    .send({ success: false, message: "Password is invalid" });
            }
        } else {
            res.status(404).send({
                success: false,
                message: Constant.error.userNotFound
            });
        }
    } else {
        res.status(400).send({
            success: false,
            message: Constant.error.badRequest
        });
    }
}




function logout(req, res) {
    res.status(200).send({
        success: true,
        eventTime: new Date().getTime()
    });
}