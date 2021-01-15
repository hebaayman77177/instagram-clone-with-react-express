const express = require("express");
const userController = require("../controllers/userController");
const authController  = require("../controllers/authController")


const router = express.Router();

router.route("/posts").get(authController.authMiddleware,userController.getUserPosts);

module.exports = router;



