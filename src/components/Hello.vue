<template>
  <div class="callout hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>

    <ul id="dropdown-menu" class="dropdown menu" data-dropdown-menu>
      <li>
        <a href="#">Dropdown for links</a>
        <ul class="menu">
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </li>
    </ul>
    <feed-activity-list></feed-activity-list>
  </div>
</template>

<script>
import FeedActivityList from '@/components/FeedActivityList'

export default {
  components: {
    FeedActivityList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  destroyed () {
    this.dropdownMenu.destroy()
  },
  mounted () {
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
