const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/authroutes');
const urlRoutes = require('./routes/urlroutes');
const analyticsRoutes = require('./routes/analyticsroutes');
const cacheMiddleware = require('./middleware/cachemiddleware');

const app = express();
app.use(express.json());

// Directly set environment variables
const MONGO_URI = 'mongodb://localhost:27017/urlshortener';
const JWT_SECRET = 'mySuperSecretJWTKey123!'; // Replace with your actual JWT secret
const GOOGLE_CLIENT_ID = '1234567890-abcde12345.apps.googleusercontent.com'; // Replace with your actual Google Client ID
const GOOGLE_CLIENT_SECRET = 'GOCSPX-abc123XYZ456';
mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});


app.use(passport.initialize());
require('./config/passport'); // Configure Passport strategies

app.use('/api/auth', authRoutes);
app.use('/api', urlRoutes);
app.use('/api', analyticsRoutes);

app.get('/api/shorten/:alias', cacheMiddleware, (req, res) => {
    // Handle redirection logic here
    const { alias } = req.params;
    Url.findOne({ shortUrl: alias }, (err, url) => {
      if (err) return res.status(500).send(err);
      if (!url) return res.status(404).send('URL not found');
      res.redirect(url.longUrl);
    });
  });






app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
