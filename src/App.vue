<template>
  <div id="app">
    <v-header :title="title" :back-display="backDisplay" :menu-display="menuDisplay"></v-header>
    <div class="content" :class="{'tabar': tabar}">
      <transition name="slide-left">
        <router-view></router-view>
      </transition>
    </div>
    <v-tabar></v-tabar>
    <v-slide></v-slide>
  </div>
</template>

<script>
import header from '@/components/header'
import tabbar from '@/components/tabbar'
import slide from '@/components/slidebar'
export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-tabar': tabbar,
    'v-slide': slide
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
    tabar () {
      return this.$route.path.split('/').length > 2 ? false : true
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
  @import "assets/scss/function";
  html, body{
    height: 100%;
  }
  html * {
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    .content {
      &.tabar {
        padding-bottom: px2rem(100px);
      }
      padding-top: px2rem(90px);
    }
    .slide-left-enter-active {
      animation: slideLeft .3s;
    }
  }


  @keyframes slideLeft {
    from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
