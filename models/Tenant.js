const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  pgName: String,
  pgAddress: String,
});

module.exports = mongoose.model('Tenant', TenantSchema); 