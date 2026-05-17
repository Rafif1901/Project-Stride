const db = require('../config/database');

class User {
  static async create({ first_name, last_name, username, email, phone_number, password, birth_date, role }) {
    const result = await db.query(
      `INSERT INTO users (first_name, last_name, username, email, phone_number, password, birth_date, role) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING user_id, first_name, last_name, username, email, phone_number, role, created_at`,
      [first_name, last_name, username, email, phone_number, password, birth_date, role]
    );
    return result.rows[0];
  }

  static async findByEmail(email) {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }

  static async findById(id) {
    const result = await db.query(
      'SELECT user_id, first_name, last_name, username, email, phone_number, role, created_at FROM users WHERE user_id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async update(id, { first_name, last_name, username, email, phone_number, password, birth_date }) {
    const result = await db.query(
      `UPDATE users SET 
        first_name = COALESCE($1, first_name), 
        last_name = COALESCE($2, last_name), 
        username = COALESCE($3, username), 
        email = COALESCE($4, email), 
        phone_number = COALESCE($5, phone_number), 
        password = COALESCE($6, password),
        birth_date = COALESCE($7, birth_date)
      WHERE user_id = $8 
      RETURNING user_id, first_name, last_name, username, email, phone_number, role`,
      [first_name, last_name, username, email, phone_number, password, birth_date, id]
    );
    return result.rows[0];
  }
}

module.exports = User;