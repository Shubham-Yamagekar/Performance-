const bcrypt = require("bcrypt");

exports.getHashPassword = getHashPassword;
exports.comparePassword = comparePassword;


async function getHashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

async function comparePassword(password, user) {
    try {
        const success = await bcrypt.compare(password.toString(), user.password);
        return {
            success
        };
    } catch (e) {
        return {
            success: false
        };
    }
}