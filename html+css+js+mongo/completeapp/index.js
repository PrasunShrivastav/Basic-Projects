const express = require("express");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);
