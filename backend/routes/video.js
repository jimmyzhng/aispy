const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

// Gets video details of specified video id
router.get('/', async (req, res) => {
  try {
    const videos = await db.getVideoById(req.query.id);
    res.send(videos);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching the video details.');
  }
});

module.exports = router;