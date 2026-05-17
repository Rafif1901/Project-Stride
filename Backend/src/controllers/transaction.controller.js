const TransactionService = require('../services/transaction.service');

class TransactionController {
  static async createTransaction(req, res, next) {
    try {
      const transactionData = { items: req.body.items, user_id: req.user.userId };
      const transaction = await TransactionService.createTransaction(transactionData);
      
      res.status(201).json({
        success: true,
        message: 'Transaction completed successfully',
        payload: transaction,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMyHistory(req, res, next) {
    try {
      const history = await TransactionService.getUserHistory(req.user.userId);
      res.status(200).json({
        success: true,
        message: 'Transaction history retrieved successfully',
        payload: history,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TransactionController;