const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Process payment
router.post('/payment', paymentController.processPayment);

module.exports = router;
