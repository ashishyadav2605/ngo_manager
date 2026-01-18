const express = require('express');
const router = express.Router();

// Get all campaigns
router.get('/', (req, res) => {
  const campaigns = [
    { id: 1, title: 'Education for All', description: 'Providing education to underprivileged children', goal: 50000, raised: 25000 },
    { id: 2, title: 'Clean Water Initiative', description: 'Access to clean drinking water', goal: 30000, raised: 15000 }
  ];
  res.json(campaigns);
});

module.exports = router;