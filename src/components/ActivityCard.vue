<template>
      <div class="medium-12 columns">
        <div class="callout">
          <div><strong>{{ activity.summary }}</strong></div>
          <div><em>Activity ID:</em> {{ activity.id }} | <em>Actor:</em> {{ activity.actor }} | <em>Verb:</em> {{ activity.verb }}</div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return { }
  },
  destroyed () { },
  mounted () { },
  name: 'ActivityCard',
  props: [
    'activity'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
