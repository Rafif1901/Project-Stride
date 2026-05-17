const Transaction = require('../models/transaction.model');
const Marketplace = require('../models/marketplace.model');
const { AppError } = require('../middleware/errorHandler');

class TransactionService {
  static async createTransaction({ user_id, items }) {
    let total_price = 0;
    const processedItems = [];

    // stock
    for (const item of items) {
      const dbItem = await Marketplace.findById(item.item_id);
      
      if (!dbItem) {
        throw new AppError(`Item product with ID ${item.item_id} not found`, 404);
      }
      
      if (dbItem.stock < item.quantity) {
        throw new AppError(`Insufficient stock for product: ${dbItem.item_name}. Available: ${dbItem.stock}`, 400);
      }

      const subtotal = Number(dbItem.price) * item.quantity;
      total_price += subtotal;

      processedItems.push({
        item_id: item.item_id,
        size: item.size,
        quantity: item.quantity,
        subtotal
      });
    }

    return await Transaction.create({ user_id, items: processedItems, total_price });
  }

  static async getUserHistory(userId) {
    return await Transaction.findHistoryByUserId(userId);
  }
}

module.exports = TransactionService;