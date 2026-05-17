const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/transaction.controller');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, TransactionController.createTransaction);
router.get('/history', authenticateToken, TransactionController.getMyHistory);

module.exports = router;