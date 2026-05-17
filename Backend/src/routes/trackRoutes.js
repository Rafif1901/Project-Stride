const express = require('express');
const router = express.Router();
const TrackController = require('../controllers/track.controller');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// all runner can see avail events
router.get('/', TrackController.getAllTracks);
router.get('/:id', TrackController.getTrackById);

// admin only
router.post('/', authenticateToken, authorizeAdmin, TrackController.createTrack);
router.delete('/:id', authenticateToken, authorizeAdmin, TrackController.deleteTrack);

module.exports = router;