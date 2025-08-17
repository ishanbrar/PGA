const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all images - development mode' });
});

router.post('/upload', (req, res) => {
  res.json({ message: 'Upload image - development mode' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete image - development mode' });
});

module.exports = router;
