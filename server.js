const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://mssuchith:dZh7Y5l1ARRv1oz7@cluster0.irnuaxp.mongodb.net/nammapg')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import routes
const tenantRoutes = require('./routes/tenant');
const ownerRoutes = require('./routes/owner');

// Use routes
app.use('/api/tenant', tenantRoutes);
app.use('/api/owner', ownerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 