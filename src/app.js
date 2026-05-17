const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./middleware/errorHandler');
const { requestLogger } = require('./middleware/requestLogger');

const userRoutes = require('./routes/userRoutes');
const trackRoutes = require('./routes/trackRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(helmet());

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204,
}));

// rate limiter
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // duration
  max: 10, // 10 tries per IP
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/users/register', authLimiter);
app.use('/users/login', authLimiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/marketplace', marketplaceRoutes);
app.use('/scores', scoreRoutes);
app.use('/transactions', transactionRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', project: 'Stride API', timestamp: new Date().toISOString() });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
    payload: null,
  });
});

app.use(errorHandler);

module.exports = app;