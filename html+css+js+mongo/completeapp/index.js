const express = require("express");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

console.log(process.env);
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/course", courseRouter);
// app.use("/admin", adminRouter);
async function main() {
  await mongoose.connect(process.env.mongoUrl);
  app.listen(3000);
}
main();
