const ScoreService = require('../services/score.service');

class ScoreController {
  static async recordScore(req, res, next) {
    try {
      const scoreData = { ...req.body, user_id: req.user.userId };
      const score = await ScoreService.recordScore(scoreData);
      
      res.status(201).json({
        success: true,
        message: 'Score recorded successfully',
        payload: score,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getScoresByTrack(req, res, next) {
    try {
      const { trackId } = req.params;
      const scores = await ScoreService.getScoresByTrack(trackId);
      
      res.status(200).json({
        success: true,
        message: 'Scores retrieved successfully',
        payload: scores,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getMyScores(req, res, next) {
    try {
      // specific score for login user
      const scores = await ScoreService.getScoresByUser(req.user.userId);
      
      res.status(200).json({
        success: true,
        message: 'Your scores retrieved successfully',
        payload: scores,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ScoreController;