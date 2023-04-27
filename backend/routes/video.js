const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

// Gets all videos that have a foreign key of specified user id
router.get('/', async (req, res) => {
  const videos = await db.getVideoById(req.query.id);
  res.send(videos);
});

module.exports = router;