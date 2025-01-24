const express = require('express');
const router = express.Router();
const urlController = require('../controller/urlcontroller');

router.post('/shorten', urlController.createShortUrl);
router.get('/shorten/:alias', urlController.redirectUrl);

module.exports = router;
