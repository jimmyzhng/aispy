const express = require('express');
const router = express.Router();
const { s3 } = require('../utils/aws.js');

router.get('/:key', (req, res) => {
  const key = req.params.key;
  const params = {
    Bucket: 'aispy',
    Key: key
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
    res.setHeader('Content-Type', data.ContentType);
    res.send(data.Body);
  });
});

module.exports = router;