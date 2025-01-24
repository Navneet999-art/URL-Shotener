const passport = require('passport');
const jwt = require('jsonwebtoken');

// Directly set environment variables
const JWT_SECRET = 'mySuperSecretJWTKey123!'; 

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleAuthCallback = (req, res) => {
  const token = jwt.sign({ id: req.user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
