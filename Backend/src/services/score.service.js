const Score = require('../models/score.model');
const Track = require('../models/track.model');
const { AppError } = require('../middleware/errorHandler');
const redis = require('../database/redis');

class ScoreService {
  static async recordScore(data) {
    const track = await Track.findById(data.track_id);
    if (!track) {
      throw new AppError('Track/Event not found', 404);
    }

    const score = await Score.create(data);
    
    await redis.del(`stride:scores:track:${data.track_id}`);
    await redis.del(`stride:scores:user:${data.user_id}`);
    return score;
  }

  static async getScoresByTrack(trackId) {
    const cacheKey = `stride:scores:track:${trackId}`;
    
    const cachedScores = await redis.get(cacheKey);
    if (cachedScores) return JSON.parse(cachedScores);

    const scores = await Score.findByTrackId(trackId);
    await redis.set(cacheKey, JSON.stringify(scores), 'EX', 300); // 5 minute cache
    return scores;
  }

  static async getScoresByUser(userId) {
    const cacheKey = `stride:scores:user:${userId}`;

    const cachedScores = await redis.get(cacheKey);
    if (cachedScores) return JSON.parse(cachedScores);

    const scores = await Score.findByUserId(userId);
    await redis.set(cacheKey, JSON.stringify(scores), 'EX', 300);
    return scores;
  }
}

module.exports = ScoreService;