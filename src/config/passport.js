const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Directly set environment variables
const GOOGLE_CLIENT_ID = '1234567890-abcde12345.apps.googleusercontent.com'; // Replace with your actual Google Client ID
const GOOGLE_CLIENT_SECRET = 'GOCSPX-abc123XYZ456'; 

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Here you can save the user profile to your database
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
