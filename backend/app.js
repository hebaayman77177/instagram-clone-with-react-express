const express = require("express");
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");
const userRouter = require("./routes/userRouter");
const globalErorrHandler = require("./controllers/globalErrorHandler");



const app = express();
app.listen(3000)

app.get('/', function (req, res) {
    res.send('hello world')
  })
app.use(express.json({ limit: "10kb" }));


app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/posts/", postRouter);
app.use("/api/v1/users/", userRouter);
app.use(globalErorrHandler);
module.exports = app;