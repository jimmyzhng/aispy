const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return console.log(err);
    }

    res.clearCookie('connect.sid');
    res.send({ message: "Logged out successfully." });
  });
});

module.exports = router;