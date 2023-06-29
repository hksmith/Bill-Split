const express = require('express');
const router = express.Router();
const splitController = require('../controllers/splitController');

// Calculate split bill
router.post('/split', splitController.calculateSplitBill);

module.exports = router;
