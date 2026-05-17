const db = require('../config/database');

class Marketplace {
  static async create({ item_name, description, price, sizes, stock, created_by }) {
    const result = await db.query(
      `INSERT INTO marketplace (item_name, description, price, sizes, stock, created_by) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [item_name, description, price, sizes, stock, created_by]
    );
    return result.rows[0];
  }

  static async findAll() {
    const result = await db.query('SELECT * FROM marketplace ORDER BY item_name ASC');
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query('SELECT * FROM marketplace WHERE item_id = $1', [id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM marketplace WHERE item_id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Marketplace;