const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const key = process.env.key;

function auth(req, res, next) {
  const token = req.headers.token;
  try {
    const response = jwt.verify({ token: token }, key);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}
module.exports = {
  auth: auth,
};
