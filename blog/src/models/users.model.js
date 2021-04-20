const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  _id: ObjectId,
  name: String,
  title: String,
  content: String,
  createAt : {type : Date , default : Date.now},
  updateAt : {type : Date , default : Date.now},
});

module.exports = mongoose.model('User', User);