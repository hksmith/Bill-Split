const paymentGateway = require('../../config/paymentGateway');

// Process payment using the payment gateway API and split the amount among people
exports.processPayment = async (amount, cardNumber, expiryMonth, expiryYear, cvv, splitPercentage, peopleCount) => {
  try {
    // Implement the logic to call the payment gateway API with the provided payment details
    const paymentResult = await paymentGateway.processPayment(amount, cardNumber, expiryMonth, expiryYear, cvv);
    
    // Calculate the split amount based on the given percentage and number of people
    const splitAmount = (amount * splitPercentage) / 100 / peopleCount;
    
    // Return the payment result and split amount
    return {
      paymentResult,
      splitAmount,
    };
  } catch (error) {
    throw new Error('Payment processing failed.');
  }
};


