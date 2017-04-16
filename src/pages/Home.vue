<template>
  <div class="page_bd">
    <div class="serviceList">
      <figure>
        <img src="http://css.8684.com/xq/images/bus_w.png">
        <figcaption>86巴士</figcaption>
      </figure>
      <figure>
        <img src="http://css.8684.com/xq/images/nav_icon_ych.png">
        <figcaption>广深线</figcaption>
      </figure>
      <figure>
        <img src="http://css.8684.com/xq/images/wodechepiao_w.png">
        <figcaption>我的车票</figcaption>
      </figure>
      <figure>
        <img src="http://css.8684.com/xq/images/usericon_w.png">
        <figcaption>我的</figcaption>
      </figure>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .page_bd {
    padding-top: px2rem(40px);
  }
  .serviceList {
    display: flex;
    padding-bottom: px2rem(20px);
    figure {
      flex: 1;
      text-align: center;
      img {
        width: px2rem(120px);
        border-radius: 50%;
      }
      figcaption {
        padding-top: px2rem(15px);
        @include font-dpr(14px);
      }
      &:first-child {
        img {
          background-color: $orange;
        }
        figcaption {
          color: $orange;
        }
      }
      &:nth-child(2) {
        img {
          background-color: $blue;
        }
        figcaption {
          color: $blue;
        }
      }
      &:nth-child(3) {
        img {
          background-color: $purple;
        }
        figcaption {
          color: $purple;
        }
      }
      &:last-child {
        img {
          background-color: $green;
        }
        figcaption {
          color: $green;
        }
      }
    }
  }
</style>
