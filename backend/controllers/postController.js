const Post = require("./../models/postModel");
const funFactory = require("../controllers/controllerFunctionsFactory")



exports.addPost = funFactory.addDocFactory(Post);
exports.getPosts = funFactory.getDocsFactory(Post);

