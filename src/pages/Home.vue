<template>
  <div class="page_bd">
    <div class="serviceList">
      <router-link to="/home">
        <figure>
          <img src="http://css.8684.com/xq/images/bus_w.png">
          <figcaption>86巴士</figcaption>
        </figure>
      </router-link>
      <router-link to="/interCity">
        <figure>
          <img src="http://css.8684.com/xq/images/nav_icon_ych.png">
          <figcaption>广深线</figcaption>
        </figure>
      </router-link>
      <router-link to="/ticket">
        <figure>
          <img src="http://css.8684.com/xq/images/wodechepiao_w.png">
          <figcaption>我的车票</figcaption>
        </figure>
      </router-link>
      <router-link to="/my">
        <figure>
          <img src="http://css.8684.com/xq/images/usericon_w.png">
          <figcaption>我的</figcaption>
        </figure>
      </router-link>
    </div>
    <v-adv></v-adv>
  </div>
</template>
<script type="text/ecmascript-6">
  import adv from '@/components/advertisement'
  export default {
    components: {
      'v-adv': adv
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .page_bd {
    padding-top: px2rem(40px);
  }
  .serviceList {
    display: flex;
    padding-bottom: px2rem(40px);
    a {
      flex: 1;
      text-align: center;
      &.active {
        figcaption {
          color: $orange;
        }
      }
      img {
        width: px2rem(120px);
        border-radius: 50%;
      }
      figcaption {
        padding-top: px2rem(15px);
        @include font-dpr(14px);
        color: $blue;
      }
      &:first-child {
        img {
          background-color: $orange;
        }
      }
      &:nth-child(2) {
        img {
          background-color: $blue;
        }
      }
      &:nth-child(3) {
        img {
          background-color: $purple;
        }
      }
      &:last-child {
        img {
          background-color: $green;
        }
      }
    }
  }
</style>
