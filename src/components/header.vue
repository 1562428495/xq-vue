<template>
  <header class="header">
    <div class="logo" v-if="!backDisplay">
      <router-link to="/home"><img src="../assets/images/logo.png"></router-link>
    </div>
    <div class="back" v-if="backDisplay" @click="goBack"><i class="icon icon-jiantou_zuo"></i></div>
    <div class="title">{{title}}</div>
    <div class="icons"><i v-if="menuDisplay" class="icon icon-caidanlan"></i></div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: String,
      backDisplay: Boolean,
      menuDisplay: Boolean
    },
    data () {
      return {}
    },
    methods: {
      goBack () {
        window.history.back()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index.scss";

  .header {
    display: flex;
    align-items: center;
    height: px2rem(90px);
    padding: 0 px2rem(30px);
    background: $blue;
    color: #fff;
  }
  .logo {
    flex: 1;
    text-align: left;
    font-size: 0;
    img {
      width: px2rem(110px);
    }
  }
  .back {
    flex: 1;
    @include font-dpr(30px)
    text-align: left;
  }
  .title {
    flex: 6;
    text-align: center;
    @include font-dpr(16px);
  }
  .icons {
    flex: 1;
    text-align: right;

    .icon-jiantou_zuo{
      @include font-dpr(30px);
    }
    .icon-caidanlan {
      @include font-dpr(20px);
    }
  }

</style>
