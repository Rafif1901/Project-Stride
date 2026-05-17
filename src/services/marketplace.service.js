const Marketplace = require('../models/marketplace.model');
const { AppError } = require('../middleware/errorHandler');
const redis = require('../database/redis');

class MarketplaceService {
  static async createItem(data) {
    const item = await Marketplace.create(data);
    await redis.del('stride:market:all');
    return item;
  }

  static async getAllItems() {
    const cacheKey = 'stride:market:all';
    
    const cachedItems = await redis.get(cacheKey);
    if (cachedItems) return JSON.parse(cachedItems);

    const items = await Marketplace.findAll();
    await redis.set(cacheKey, JSON.stringify(items), 'EX', 1800); // Cache bertahan 30 Menit
    return items;
  }

  static async deleteItem(id) {
    const item = await Marketplace.delete(id);
    if (!item) {
      throw new AppError('Item not found', 404);
    }
    await redis.del('stride:market:all');
    return item;
  }
}

module.exports = MarketplaceService;