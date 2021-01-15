const Post = require("./../models/postModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getUserPosts = catchAsync(async (req, res, next) => {

  const posts = await  Post.find({"postedby":req.currentUser._id});
  return res.status(200).json({
    status: "succeed",
    legnth: posts.length,
    data: posts
  });  
  
});
