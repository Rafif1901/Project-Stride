const db = require('../config/database');

class Transaction {
  static async create({ user_id, items, total_price }) {
    const client = await db.pool.connect();
    try {
      await client.query('BEGIN');

      const transResult = await client.query(
        `INSERT INTO transactions (user_id, total_price, status) 
         VALUES ($1, $2, 'success') RETURNING *`,
        [user_id, total_price]
      );
      const transaction = transResult.rows[0];

      for (const item of items) {
        await client.query(
          `INSERT INTO transaction_items (transaction_id, item_id, size, quantity, subtotal) 
           VALUES ($1, $2, $3, $4, $5)`,
          [transaction.transaction_id, item.item_id, item.size, item.quantity, item.subtotal]
        );

        const stockUpdate = await client.query(
          'UPDATE marketplace SET stock = stock - $1 WHERE item_id = $2 AND stock >= $1 RETURNING stock',
          [item.quantity, item.item_id]
        );

        if (stockUpdate.rows.length === 0) {
          throw new Error(`Insufficient stock or item not found for ID: ${item.item_id}`);
        }
      }

      await client.query('COMMIT');
      return transaction;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  static async findHistoryByUserId(userId) {
    const result = await db.query(
      `SELECT t.transaction_id, t.total_price, t.status, t.transaction_date,
              COALESCE(json_agg(json_build_object(
                'item_name', m.item_name, 
                'size', ti.size, 
                'quantity', ti.quantity, 
                'subtotal', ti.subtotal
              )) FILTER (WHERE m.item_id IS NOT NULL), '[]') as order_items
       FROM transactions t
       JOIN transaction_items ti ON t.transaction_id = ti.transaction_id
       JOIN marketplace m ON ti.item_id = m.item_id
       WHERE t.user_id = $1
       GROUP BY t.transaction_id
       ORDER BY t.transaction_date DESC`,
      [userId]
    );
    return result.rows;
  }
}

module.exports = Transaction;