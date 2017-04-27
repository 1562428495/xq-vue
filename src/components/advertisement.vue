<template>
  <div class="advertisement" :class="{hide: advStatus}">
    <img src="http://css.8684.com/xq/images/adv.png">
    <i class="icon icon-close" @click="hideAdv"></i>
  </div>
</template>
<script>
  export default {
    computed: {
      advStatus () {
        return this.$store.state.com.advStatus
      }
    },
    methods: {
      hideAdv() {
        this.$store.dispatch('hideAdv')
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .advertisement {
    position: relative;
    width: 96%;
    margin: 0 auto;
    transition: all .6s;
    &.hide {
      display: none;
    }
    .icon-close {
      position: absolute;
      right: -5px;
      top: -8px;
      @include font-dpr(16px);
      color: #000;
      font-weight: bold;
    }
  }
</style>
