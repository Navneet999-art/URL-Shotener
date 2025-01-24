const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.log('Redis error: ', err);
});

const cache = (req, res, next) => {
  const { alias } = req.params;
  client.get(alias, (err, data) => {
    if (err) throw err;
    if (data) {
      res.redirect(data);
    } else {
      next();
    }
  });
};

module.exports = cache;
