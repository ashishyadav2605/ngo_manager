const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ngo-db';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
const campaignsRouter = require('./routes/campaigns');
const donationsRouter = require('./routes/donations');
const volunteersRouter = require('./routes/volunteers');
const authRouter = require('./routes/auth');

app.use('/api/campaigns', campaignsRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/volunteers', volunteersRouter);
app.use('/api/auth', authRouter);

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'NGO Website Backend API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});