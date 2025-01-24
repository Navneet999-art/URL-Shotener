const express = require('express');
const router = express.Router();
const analyticsController = require('../controller/analyticscontroller');

router.get('/analytics/:alias', analyticsController.getUrlAnalytics);
router.get('/analytics/topic/:topic', analyticsController.getTopicAnalytics);
router.get('/analytics/overall', analyticsController.getOverallAnalytics);

module.exports = router;
