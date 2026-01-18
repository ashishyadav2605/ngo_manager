const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const campaignsRouter = require('./routes/campaigns');
const donationsRouter = require('./routes/donations');
const volunteersRouter = require('./routes/volunteers');

app.use('/api/campaigns', campaignsRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/volunteers', volunteersRouter);

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'NGO Website Backend API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});