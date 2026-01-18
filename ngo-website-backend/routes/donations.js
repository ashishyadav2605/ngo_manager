const express = require('express');
const router = express.Router();

// Get all donations
router.get('/', (req, res) => {
  const donations = [
    { id: 1, donor: 'John Doe', amount: 100, date: '2023-01-01' },
    { id: 2, donor: 'Jane Smith', amount: 200, date: '2023-01-02' }
  ];
  res.json(donations);
});

module.exports = router;