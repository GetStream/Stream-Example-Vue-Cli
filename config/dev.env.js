var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  STREAM_APP_ID: '"29337"',
  STREAM_APP_KEY: '"pvjukxquhwfy"',
  STREAM_FEED_GROUP: '"framework_feeds"',
  STREAM_FEED_ID: '"vue"',
  STREAM_FEED_READ_ONLY_TOKEN: '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiJyZWFkIiwiZmVlZF9pZCI6ImZyYW1ld29ya19mZWVkc3Z1ZSJ9.PbUousiPJe98111FVHFDK6AnW5z1nzeahAF8SfiYmQM"'
})
