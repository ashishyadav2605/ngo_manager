const express = require('express');
const Razorpay = require('razorpay');

const router = express.Router();

const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

const razorpay =
  razorpayKeyId && razorpayKeySecret
    ? new Razorpay({ key_id: razorpayKeyId, key_secret: razorpayKeySecret })
    : null;

// Simple sample donations list (can be replaced with DB later)
router.get('/', (req, res) => {
  const donations = [
    { id: 1, donor: 'John Doe', amount: 100, date: '2023-01-01' },
    { id: 2, donor: 'Jane Smith', amount: 200, date: '2023-01-02' },
  ];

  res.json(donations);
});

// Create Razorpay order for a donation
router.post('/create-order', async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(500).json({ message: 'Payment configuration is missing on the server.' });
    }

    const { amount } = req.body;

    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ message: 'A valid donation amount is required.' });
    }

    const options = {
      amount: Math.round(amount * 100), // amount in paise
      currency: 'INR',
      receipt: `donation_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: razorpayKeyId,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return res.status(500).json({ message: 'Failed to create payment order.' });
  }
});

module.exports = router;
