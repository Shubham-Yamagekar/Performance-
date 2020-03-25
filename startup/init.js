const video = require("../video/controller/video");

module.exports = async function () {
    await video.addDefaults()
}
