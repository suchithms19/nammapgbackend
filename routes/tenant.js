const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');

// Handle tenant form submission
router.post('/', async (req, res) => {
  try {
    const tenant = new Tenant(req.body);
    await tenant.save();
    res.status(201).send(tenant);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router; 