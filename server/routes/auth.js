const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint - development mode' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint - development mode' });
});

router.get('/me', (req, res) => {
  res.json({ message: 'Get user profile - development mode' });
});

module.exports = router;
