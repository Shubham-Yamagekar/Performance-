const express = require("express");
const router = express.Router();
const session = require("../middleware/session")


const userController = require("../user/controller/user");
const videoController = require("../video/controller/video")

router.post("/registerUser", userController.registerUser);
router.post("/loginUser", userController.loginUser);
router.post("/logout", userController.logout);

router.get("/downloadVideo", videoController.downloadVideo)









module.exports = router;