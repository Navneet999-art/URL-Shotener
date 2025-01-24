const Url = require('../models/urlmodels');
const shortid = require('shortid');

exports.createShortUrl = async (req, res) => {
  const { longUrl, customAlias, topic } = req.body;
  const shortUrl = customAlias || shortid.generate();
  const newUrl = new Url({ longUrl, shortUrl, customAlias, topic });
  await newUrl.save();
  res.json({ shortUrl, createdAt: newUrl.createdAt });
};

exports.redirectUrl = async (req, res) => {
  const { alias } = req.params;
  const url = await Url.findOne({ shortUrl: alias });
  if (url) {
    // Log analytics data here
    res.redirect(url.longUrl);
  } else {
    res.status(404).json({ message: 'URL not found' });
  }
};
