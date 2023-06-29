const paymentService = require('../services/paymentService');

// Handle payment request
exports.processPayment = async (req, res) => {
  try {
    const { amount, cardNumber, expiryMonth, expiryYear, cvv } = req.body;
    
    // Call the payment service to process the payment
    const paymentResult = await paymentService.processPayment(amount, cardNumber, expiryMonth, expiryYear, cvv);
    
    // Return the payment result
    res.status(200).json({ success: true, result: paymentResult });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
