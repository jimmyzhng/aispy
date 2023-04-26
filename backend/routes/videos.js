const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

router.get('/', async (req, res) => {
  const videos = await db.getVideosByUserId(req.query.id);
  res.send(videos);
});

module.exports = router;