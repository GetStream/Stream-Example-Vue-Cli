<template>
  <div class="grid-x">
    <div class="cell small-6 grid-container">
      <feed-container :feed-id="feeds[0].id" :feed-token="feeds[0].token"></feed-container>
    </div>
    <div class="cell small-6 grid-container">
      <feed-container :feed-id="feeds[1].id" :feed-token="feeds[1].token"></feed-container>
    </div>
  </div>
</template>

<script>
import FeedContainer from '@/components/FeedContainer'
import * as stream from 'getstream'

export default {
  components: {
    FeedContainer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      feeds: process.env.STREAM_FEEDS
    }
  },
  destroyed () {
    this.dropdownMenu.destroy()
  },
  mounted () {
    // ensure feeds follow one another
    let client = stream.connect(
      process.env.STREAM_APP_KEY,
      null,
      process.env.STREAM_APP_ID
    )
    client.feed(
      process.env.STREAM_FEED_GROUP,
      this.feeds[0].id,
      process.env.STREAM_FEED_READ_WRITE_TOKEN
    ).follow(process.env.STREAM_FEED_GROUP, this.feeds[1].id).catch(err => {
      console.log('error following feed: ' + err)
    })
    client.feed(
      process.env.STREAM_FEED_GROUP,
      this.feeds[1].id,
      process.env.STREAM_FEED_READ_WRITE_TOKEN
    ).follow(process.env.STREAM_FEED_GROUP, this.feeds[0].id).catch(err => {
      console.log('error following feed: ' + err)
    })

    this.dropdownMenu = new Foundation.DropdownMenu($('#dropdown-menu'), {
      // These options can be declarative using the data attributes
      hoverDelay: 300
    })
  },
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

h1 {
  color: $primary-color;
}

h2 {
  color: $secondary-color;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

#dropdown-menu {
  display: inline-block;
}

</style>
