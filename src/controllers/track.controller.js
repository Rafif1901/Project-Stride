const TrackService = require('../services/track.service');

class TrackController {
  static async createTrack(req, res, next) {
    try {
      const trackData = { ...req.body, created_by: req.user.userId };
      const track = await TrackService.createTrack(trackData);
      
      res.status(201).json({
        success: true,
        message: 'Track event created successfully',
        payload: track,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllTracks(req, res, next) {
    try {
      const tracks = await TrackService.getAllTracks();
      res.status(200).json({
        success: true,
        message: 'Tracks retrieved successfully',
        payload: tracks,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTrackById(req, res, next) {
    try {
      const { id } = req.params;
      const track = await TrackService.getTrackById(id);
      res.status(200).json({
        success: true,
        message: 'Track retrieved successfully',
        payload: track,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTrack(req, res, next) {
    try {
      const { id } = req.params;
      await TrackService.deleteTrack(id);
      res.status(200).json({
        success: true,
        message: 'Track deleted successfully',
        payload: null,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TrackController;