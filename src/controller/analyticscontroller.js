const Url = require('../models/urlmodels');

exports.getUrlAnalytics = async (req, res) => {
  const { alias } = req.params;
  const url = await Url.findOne({ shortUrl: alias });
  if (url) {
    // Retrieve and calculate analytics data here
    res.json({
      totalClicks: 100, // Example data
      uniqueUsers: 50, // Example data
      clicksByDate: [{ date: '2025-01-23', clickCount: 10 }], // Example data
      osType: [{ osName: 'Windows', uniqueClicks: 30, uniqueUsers: 20 }], // Example data
      deviceType: [{ deviceName: 'mobile', uniqueClicks: 40, uniqueUsers: 30 }] // Example data
    });
  } else {
    res.status(404).json({ message: 'URL not found' });
  }
};

exports.getTopicAnalytics = async (req, res) => {
  const { topic } = req.params;
  const urls = await Url.find({ topic });
  if (urls.length > 0) {
    // Calculate analytics data for the topic
    res.json({
      totalClicks: 200, // Example data
      uniqueUsers: 100, // Example data
      clicksByDate: [{ date: '2025-01-23', clickCount: 20 }], // Example data
      urls: urls.map(url => ({
        shortUrl: url.shortUrl,
        totalClicks: 50, // Example data
        uniqueUsers: 25 // Example data
      }))
    });
  } else {
    res.status(404).json({ message: 'No URLs found for this topic' });
  }
};

exports.getOverallAnalytics = async (req, res) => {
  const urls = await Url.find();
  if (urls.length > 0) {
    // Calculate overall analytics data
    res.json({
      totalUrls: urls.length,
      totalClicks: 500, // Example data
      uniqueUsers: 250, // Example data
      clicksByDate: [{ date: '2025-01-23', clickCount: 50 }], // Example data
      osType: [{ osName: 'Windows', uniqueClicks: 150, uniqueUsers: 100 }], // Example data
      deviceType: [{ deviceName: 'mobile', uniqueClicks: 200, uniqueUsers: 150 }] // Example data
    });
  } else {
    res.status(404).json({ message: 'No URLs found' });
  }
};



