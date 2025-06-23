const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  email: { type: string, unique: true },
  password: { type: string, required: true },
  name: string,
});
const admin = new Schema({
  email: { type: string, unique: true },
  password: { type: string, required: true },
  name: string,
});
const course = new Schema({
  title: string,
  description: string,
  price: number,
  imageUrl: string,
  teacher: ObjectId,
});
const purchase = new Schema({
  course: ObjectId,
  user: ObjectId,
});
const userModel = mongoose.model("user", user);
const adminModel = mongoose.model("admin", admin);
const courseModel = mongoose.model("course", course);
const purchaseModel = mongoose.model("purchase", purchase);
module.exports = {
  userModel: userModel,
  adminModel: adminModel,
  courseModel: courseModel,
  purchaseModel: purchaseModel,
};
