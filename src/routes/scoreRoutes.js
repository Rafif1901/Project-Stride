const express = require('express');
const router = express.Router();
const ScoreController = require('../controllers/score.controller');
const { authenticateToken } = require('../middleware/authMiddleware');

// tracking personal score for runner
router.post('/', authenticateToken, ScoreController.recordScore);
router.get('/my', authenticateToken, ScoreController.getMyScores);

// leaderboard per event
router.get('/track/:trackId', ScoreController.getScoresByTrack);

module.exports = status = router;