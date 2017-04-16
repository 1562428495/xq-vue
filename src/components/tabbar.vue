<template>
  <div class="tabbar">
    <div class="tab-item">
      <router-link to="/home">
        <div class="icon icon-home"></div>
        <div class="tab-text">首页</div>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/order">
        <div class="icon icon-dingdan"></div>
        <div class="tab-text">订单</div>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/store">
        <div class="icon icon-cart"></div>
        <div class="tab-text">商城</div>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/my">
        <div class="icon icon-wode"></div>
        <div class="tab-text">我的</div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index.scss";
  .tabbar {
    display: flex;
    align-items: center;
    height: px2rem(90px);
    text-align: center;
    box-shadow: 0 0 4px rgba(#000, .2);
    background-color: #fff;
    .tab-item {
      flex: 1;
      a {
        &.active {
          color: $blue;
        }
      }
      .icon {
        margin-bottom: px2rem(10px);
        @include font-dpr(20px)
      }
    }
  }

</style>
