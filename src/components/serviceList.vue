<template>
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
</template>
<script type="text/ecmascript-6">
  export default {

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .serviceList {
    display: flex;
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
