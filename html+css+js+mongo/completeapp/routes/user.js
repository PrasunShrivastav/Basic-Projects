const { Router } = require("express");
const userRouter = Router();
userRouter.post("/signup", (req, res) => {});
userRouter.post("/signin", (req, res) => {});
userRouter.get("/course", (req, res) => {});
module.exports = {
  userRouter: userRouter,
};
