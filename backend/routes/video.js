const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

// Gets video details of specified video id
router.get('/', async (req, res) => {
  const videos = await db.getVideoById(req.query.id);
  res.send(videos);
});

module.exports = router;