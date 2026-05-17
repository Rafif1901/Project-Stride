const express = require('express');
const router = express.Router();
const MarketplaceController = require('../controllers/marketplace.controller');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

router.get('/', MarketplaceController.getAllItems);

// only admin
router.post('/', authenticateToken, authorizeAdmin, MarketplaceController.createItem);
router.delete('/:id', authenticateToken, authorizeAdmin, MarketplaceController.deleteItem);

module.exports = router;