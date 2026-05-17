const { body, param, query } = require('express-validator');

// PW min 8 chars, 1 uppercase, 1 lowercase, 1 num
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_]{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const phoneRegex = /^\+?[\d\s-]{10,}$/;

const idValidation = [
  param('id').isUUID(4).withMessage('ID must be a valid UUID v4'),
];

const validate = (req, res, next) => {
  const errors = require('express-validator').validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(err => err.msg);
    return res.status(400).json({
      success: false,
      message: messages.join('. '),
      payload: null,
    });
  }
  next();
};

module.exports = {
  emailRegex,
  passwordRegex,
  usernameRegex,
  phoneRegex,
  idValidation,
  validate,
};