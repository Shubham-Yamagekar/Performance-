


const dao = require("../dao/video");
const Constant = require("../../const")
const https = require("https")


exports.addDefaults = addDefaults;
exports.downloadVideo = downloadVideo

async function downloadVideo(req, res) {
    query = req.query;
    let { found, videoDetails } = await dao.getVideoLink(query.title)

    if (found) {
        const request = https.get(videoDetails.link, function (response) {
            response.pipe(res);
        });
        res.status(200).send({
            success: true
        });
    }
    else {
        res.status(400).send({
            success: false,
            message: Constant.error.badRequest
        });
    }

}

async function addDefaults() {
    const videos = await dao.getAll();
    if (!videos || videos.length <= 0) {
        await dao.addDefaults();
    }
}