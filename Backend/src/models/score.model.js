const db = require('../config/database');

class Score {
  static async create({ user_id, track_id, time_finished, pace, sub, elevation }) {
    const result = await db.query(
      `INSERT INTO scores (user_id, track_id, time_finished, pace, sub, elevation) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       ON CONFLICT (user_id, track_id) 
       DO UPDATE SET time_finished = $3, pace = $4, sub = $5, elevation = $6 
       RETURNING *`,
      [user_id, track_id, time_finished, pace, sub, elevation]
    );
    return result.rows[0];
  }

  static async findByTrackId(trackId) {
    const result = await db.query(
      `SELECT s.*, u.username, u.first_name, u.last_name
       FROM scores s 
       JOIN users u ON s.user_id = u.user_id 
       WHERE s.track_id = $1 
       ORDER BY s.time_finished ASC`,
      [trackId]
    );
    return result.rows;
  }

  static async findByUserId(userId) {
    const result = await db.query(
      `SELECT s.*, t.event_name, t.distance_km 
       FROM scores s 
       JOIN tracks t ON s.track_id = t.track_id 
       WHERE s.user_id = $1 
       ORDER BY t.event_date DESC`,
      [userId]
    );
    return result.rows;
  }
}

module.exports = Score;