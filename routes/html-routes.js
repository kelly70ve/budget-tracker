const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", function(req, res) {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;