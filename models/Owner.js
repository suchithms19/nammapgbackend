const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  pgName: String,
  pgAddress: String,
});

module.exports = mongoose.model('Owner', OwnerSchema); 