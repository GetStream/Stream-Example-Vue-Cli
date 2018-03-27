<template>
  <div>
    <h2>Feed {{ feedId }}</h2>
    <add-activity-button :feed-id="feedId" :feed-token="feedToken"></add-activity-button>
    <feed-activity-list :feed-id="feedId" :feed-token="feedToken"></feed-activity-list>
  </div>
</template>

<script>
import AddActivityButton from '@/components/AddActivityButton'
import FeedActivityList from '@/components/FeedActivityList'

export default {
  components: {
    AddActivityButton,
    FeedActivityList
  },
  data () {
    return { }
  },
  destroyed () { },
  mounted () { },
  name: 'FeedContainer',
  props: [ 'feedId', 'feedToken' ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
