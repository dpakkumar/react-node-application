const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModal = mongoose.model('users', new Schema({
  userId: String,
  userName: String,
  email: String,
  address: String,
  joiningDate: Date,
}));

module.exports = { userModal };