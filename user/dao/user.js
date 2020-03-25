const userModel = require("./../model/user");

exports.createUser = createUser;
exports.validateEmail = validateEmail;
exports.findByEmail = findByEmail;



async function createUser(fullName, email, password) {

    params = {
        fullName,
        email,
        password
    }
    let obj = new userModel(params);
    let user = await obj.save();

    return {
        created: true,
        user
    };
}


function validateEmail(email) {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegexp.test(email);
}



async function findByEmail(email) {
    let user = await userModel.findOne({ email: email }).lean();
    if (user) {
        return {
            found: true,
            user
        };
    } else {
        return {
            found: false
        };
    }
}