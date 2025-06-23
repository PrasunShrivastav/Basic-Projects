const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/course/all", (req, res) => {});
courseRouter.post("/course/purchase", (req, res) => {});

module.exports = {
  courseRouter: courseRouter,
};
