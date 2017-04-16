<template>
  <div id="app">
    <v-header :title="title" :back-display="backDisplay" :menu-display="menuDisplay"></v-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <v-tabar></v-tabar>
  </div>
</template>

<script>
import header from '@/components/header'
import tabbar from '@/components/tabbar'
export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-tabar': tabbar
  },
  data () {
    return {}
  },
  computed: {
    title () {
      switch (this.$route.path.split('/')[1]) {
        case '':
            return '86小区巴士'
        case 'home':
          return '86小区巴士'

      }
    },
    backDisplay () {
      return this.$route.path.split('/').length > 2 ? true : false
    },
    menuDisplay () {
      return this.$route.path.split('/').length > 2 ? false : true
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
html, body{
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}
</style>
