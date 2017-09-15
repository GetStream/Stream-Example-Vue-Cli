<template>
      <div class="medium-12 columns">
        <div class="callout">
          <div><strong>{{ activity.id }}</strong></div>
          <div><em>{{ activity.actor }}: {{ activity.verb }}</em></div>
          <p>{{ activity.object }}</p>
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
