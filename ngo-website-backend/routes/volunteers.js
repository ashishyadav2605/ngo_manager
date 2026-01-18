const express = require('express');
const router = express.Router();

// Get all volunteers
router.get('/', (req, res) => {
  const volunteers = [
    { id: 1, name: 'Alice Johnson', role: 'Coordinator', joined: '2022-06-01' },
    { id: 2, name: 'Bob Wilson', role: 'Fundraiser', joined: '2022-07-15' }
  ];
  res.json(volunteers);
});

module.exports = router;