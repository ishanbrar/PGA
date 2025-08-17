const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all content - development mode' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create content - development mode' });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update content - development mode' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete content - development mode' });
});

module.exports = router;
