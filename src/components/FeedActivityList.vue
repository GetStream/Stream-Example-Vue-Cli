<template>
  <div>
    <activity-card
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity">
    </activity-card>
  </div>
</template>

<script>
import * as stream from 'getstream'
import ActivityCard from '@/components/ActivityCard'

export default {
  components: {
    ActivityCard
  },
  data () {
    return {
      activities: []
    }
  },
  destroyed () { },
  methods: {
    getActivities: function () {
      this.activities = []
      let client = stream.connect(
        process.env.STREAM_APP_KEY,
        null,
        process.env.STREAM_APP_ID
      )
      let feed = client.feed(
        process.env.STREAM_FEED_GROUP,
        this.feedId,
        this.feedToken
      )
      feed.get({limit: 20, offset: 0}).then(result => {
        result['results'].map((a) => { this.activities.push(a) })
        feed.subscribe(this.feedUpdates).then(result => {
          console.log('Success connecting to ' + this.feedId + ' realtime notifications')
        }, err => {
          if (err) {
            console.log('Error connecting to ' + this.feedId + ' realtime notifications. ' + err)
          }
        })
      },
      error => {
        console.log('error...' + error)
      })
    },
    connectRealtime: function () {
      let client = stream.connect(
        process.env.STREAM_APP_KEY,
        null,
        process.env.STREAM_APP_ID
      )
      let feed = client.feed(
        process.env.STREAM_FEED_GROUP,
        this.feedId,
        this.feedToken
      )
      feed.subscribe(this.feedUpdates).then(result => {
        console.log('Success connecting to ' + this.feedId + ' realtime notifications')
      }, err => {
        if (err) {
          console.log('Error connecting to ' + this.feedId + ' realtime notifications. ' + err)
        }
      })
    },
    feedUpdates: function (updates) {
      if (updates && updates['new'].length > 0) {
        updates['new'].reverse().map((a) => { this.activities.unshift(a) })
      }
    }
  },
  mounted () {
    this.getActivities()
    // this.connectRealtime()
  },
  name: 'FeedActivityList',
  props: [ 'feedId', 'feedToken' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
