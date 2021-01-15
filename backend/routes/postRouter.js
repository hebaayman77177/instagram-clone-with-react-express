const express = require("express");
const postController = require("../controllers/postController");
const authController  = require("../controllers/authController")


const router = express.Router();

router.route("/").post(authController.authMiddleware,(req,res,next)=>{
 req.body.postedby=req.currentUser._id;
 next();
},postController.addPost);

router.route("/").get(postController.getPosts);




module.exports = router;



