const Track = require('../models/track.model');
const { AppError } = require('../middleware/errorHandler');
const redis = require('../database/redis');

class TrackService {
  static async createTrack(data) {
    const track = await Track.create(data);
    await redis.del('stride:tracks:all'); 
    return track;
  }

  static async getAllTracks() {
    const cacheKey = 'stride:tracks:all';
    
    const cachedTracks = await redis.get(cacheKey);
    if (cachedTracks) return JSON.parse(cachedTracks);

    const tracks = await Track.findAll();
    await redis.set(cacheKey, JSON.stringify(tracks), 'EX', 3600); // 1 hour cache
    return tracks;
  }

  static async getTrackById(id) {
    const track = await Track.findById(id);
    if (!track) throw new AppError('Track not found', 404);
    return track;
  }

  static async deleteTrack(id) {
    const track = await Track.delete(id);
    if (!track) {
      throw new AppError('Track not found', 404);
    }
    await redis.del('stride:tracks:all');
    return track;
  }
}

module.exports = TrackService;