const mongoose = require("mongoose");
require('dotenv').config() 
const app = require("./app");





//*************connect to mongodb *******************************//
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connection successful!");
  });