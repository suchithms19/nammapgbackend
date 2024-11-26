const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

// Handle owner form submission
router.post('/', async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).send(owner);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router; 