const User = require("./../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

function createSendToken(user, res, code, message) {
  const token = user.getToken({ id: user._id });
  return res.status(code).json({
    token: token,
    status: "success",
    data: { user },
    message: message,
  });
}

exports.authMiddleware = catchAsync(async (req, res, next) => {
  //check that the token is in the header
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return next(new AppError("you must be loged in", 401));
  }
  const token = req.headers.authorization.split(" ")[1];
  // verifay the token
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decode);
  //check that there is an existed user for this token as a user might be deleted and his token
  //may still be valid
  const currentUser = await User.findOne({ _id: decode.id })
  if (!currentUser) {
    return next(new AppError("please logi in", 401));
  }
  req.currentUser = currentUser;
  next();
});

exports.signUp = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  createSendToken(user, res, 201, "signed up successfully");
});

exports.logIn = catchAsync(async (req, res, next) => {
  //check the email and password exist
  const { email, password } = req.body;
  if (!email || !password) {
    next(new AppError("email or password are wrong", 400));
  }
  //check if there is a user with  correcthet password
  const user = await User.findOne({ email: email }).select("password");
  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError("email or password are wrong", 400));
  }
  createSendToken(user, res, 200, "loged in successfully");
});
