const db = require('../config/database');

class Track {
  static async create({ event_name, start_place, finish_place, event_date, distance_km, created_by }) {
    const result = await db.query(
      `INSERT INTO tracks (event_name, start_place, finish_place, event_date, distance_km, created_by) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [event_name, start_place, finish_place, event_date, distance_km, created_by]
    );
    return result.rows[0];
  }

  static async findAll() {
    const result = await db.query('SELECT * FROM tracks ORDER BY event_date ASC');
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query('SELECT * FROM tracks WHERE track_id = $1', [id]);
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM tracks WHERE track_id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}

module.exports = Track;