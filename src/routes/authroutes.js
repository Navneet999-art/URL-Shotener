const express = require('express');
const router = express.Router();
const authController = require('../controller/authcontroller');

router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleAuthCallback);

module.exports = router;
