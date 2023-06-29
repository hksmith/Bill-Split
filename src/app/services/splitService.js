// Calculate the split amount
exports.calculateSplitAmount = (billAmount, numParticipants) => {
    try {
      const splitAmount = billAmount / numParticipants;
      
      return splitAmount;
    } catch (error) {
      throw new Error('Split calculation failed.');
    }
  };
  