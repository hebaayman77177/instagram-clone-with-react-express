const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "the title is required"],
  },
  body: {
    type: String,
    required: [true, "the body is required"],
  },
  photo: {
    type: String
  },
  postedby: {
    type: mongoose.Schema.ObjectId,
    ref:"User",
    required: [true, "the postedBy is required"],
  }
});
postSchema.pre(/^find/, function(next) {
    this.populate({
      path: "postedby",
      select: "_id name"
    });
    next();
  });
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
