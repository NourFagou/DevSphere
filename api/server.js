const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback"
}, (token, tokenSecret, profile, done) => {
  // Handle Google login and user creation in DB
  return done(null, profile);
}));

// Routes for Google Authentication
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // On successful login, generate a JWT and send it to the client
  const token = jwt.sign(req.user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(5000, () => {
  console.log("API server running on http://localhost:5000");
});

