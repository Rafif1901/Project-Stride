const MarketplaceService = require('../services/marketplace.service');

class MarketplaceController {
  static async createItem(req, res, next) {
    try {
      const itemData = { ...req.body, created_by: req.user.userId };
      const item = await MarketplaceService.createItem(itemData);
      
      res.status(201).json({
        success: true,
        message: 'Marketplace item created successfully',
        payload: item,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllItems(req, res, next) {
    try {
      const items = await MarketplaceService.getAllItems();
      res.status(200).json({
        success: true,
        message: 'Items retrieved successfully',
        payload: items,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      await MarketplaceService.deleteItem(id);
      res.status(200).json({
        success: true,
        message: 'Item deleted successfully',
        payload: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MarketplaceController;