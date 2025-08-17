const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard - development mode' });
});

router.get('/users', (req, res) => {
  res.json({ message: 'Get all users - development mode' });
});

router.post('/users', (req, res) => {
  res.json({ message: 'Create user - development mode' });
});

module.exports = router;
