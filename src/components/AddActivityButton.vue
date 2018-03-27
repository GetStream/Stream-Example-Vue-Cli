<template>
  <div>
    <button class="button" v-on:click="addActivity">Add activity</button>
  </div>
</template>

<script>
import * as stream from 'getstream'

export default {
  data () {
    return { }
  },
  destroyed () { },
  methods: {
    addActivity: function () {
      let client = stream.connect(
        process.env.STREAM_APP_KEY,
        null,
        process.env.STREAM_APP_ID
      )
      let feed = client.feed(
        process.env.STREAM_FEED_GROUP,
        this.feedId,
        process.env.STREAM_FEED_READ_WRITE_TOKEN
      )
      let timestamp = new Date()
      feed.addActivity({
        verb: 'post',
        actor: 'user_' + this.feedId,
        object: 'post_' + timestamp.toISOString(),
        foreign_id: timestamp.toISOString(),
        time: timestamp
      }).catch(error => {
        console.log('error...' + error)
      })
      return feed
    }
  },
  mounted () { },
  name: 'AddActivityButton',
  props: [ 'feedId' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
