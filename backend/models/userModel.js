const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "the neame is required"],
  },
  email: {
    type: String,
    unique: [true, "this email is already exists"],
    required: [true, "the email is required"],
    validate: [validator.isEmail, "wrong email"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please provide your password"],
    minLength: 8,
    select: false,
  },
});

userSchema.methods.checkPassword = async function (
  loginPassword,
  userPassword
) {
  return await bcrypt.compare(loginPassword, userPassword);
};

userSchema.methods.getToken = function getToken(payloadObj) {
  return jwt.sign(payloadObj, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) next();
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
