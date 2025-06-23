const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
mongoose.connect(
  "mongodb+srv://shrivastavprasun36:SO6rUmoosG0fJ7f4@cluster0.u2dgjkv.mongodb.net/complete_app"
);

const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};
