var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  STREAM_APP_ID: '"29337"',
  STREAM_APP_KEY: '"pvjukxquhwfy"',
  STREAM_FEED_GROUP: '"framework_feeds"',
  STREAM_FEED_ID: '"vue"',
  STREAM_FEED_READ_ONLY_TOKEN: '"read only token"',
  STREAM_FEED_READ_WRITE_TOKEN: '"read / write token"',
  STREAM_FEEDS: '[{"id": "feed 1", "token": "feed token"}, {"id": "feed 2", "token": "feed 2"}]',
})
