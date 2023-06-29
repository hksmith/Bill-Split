const splitService = require('../services/splitService');

// Calculate split bill
exports.calculateSplitBill = async (req, res) => {
  try {
    const { billAmount, numParticipants } = req.body;
    
    // Call the split service to calculate the split bill
    const splitAmount = splitService.calculateSplitAmount(billAmount, numParticipants);
    
    // Return the split amount
    res.status(200).json({ success: true, splitAmount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
