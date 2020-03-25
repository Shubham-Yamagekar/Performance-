
const constant = require("../../const");
const model = require('../model/video')


exports.addDefaults = addDefaults;
exports.getAll = getAll;
exports.getVideoLink = getVideoLink

async function getVideoLink(title) {
    let videoDetails = await model.findOne({ title: title }).lean();
    if (videoDetails) {
        return {
            found: true,
            videoDetails
        };
    } else {
        return {
            found: false
        };
    }
}


async function addDefaults() {
    await model.collection.insertMany(constant.videoUrl);
}


async function getAll() {
    return await model.find().lean();
}
