<template>
  <div class="page_bd">
    <service-list></service-list>
    <v-adv></v-adv>
    <div class="select-wrap">
      <div class="title">中海誉城</div>
      <div class="con">
        <div class="invite">马上邀请邻居入住</div>
        <div class="people-num"><i class="icon icon-wode"></i>小区已入住<span class="num">7172</span>人</div>
        <div class="time">
          时间
          <button>工作日</button>
          <button>周末</button></div>
        <div class="direction">
          方向
          <button>出门</button>
          <button>回家</button></div>
      </div>
    </div>
    <route-list></route-list>
    <share v-show="share"></share>
  </div>
</template>
<script type="text/ecmascript-6">
  import adv from '@/components/advertisement'
  import serviceList from '@/components/serviceList'
  import routeList from '@/components/routeList'
  import share from '@/components/shareAlert'

  export default {
    components: {
      'v-adv': adv,
      'service-list': serviceList,
      'route-list': routeList,
      share
    },
    data () {
      return {
        share: false
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .page_bd {
    padding-top: px2rem(40px);
  }
  .serviceList {
    padding-bottom: px2rem(40px);
  }
  .select-wrap {
    margin-bottom: px2rem(40px);
    color: $blue;
    @include font-dpr(14px);
    .con {
      position: relative;
      margin-top: px2rem(40px);
      .invite {
        position: absolute;
        right: px2rem(30px);
        top: px2rem(-6px);
        padding: px2rem(6px);
        color: $orange;
        border: 1px solid $orange;
        border-radius: $btn-radius;
      }
    }
    .title {
      padding: px2rem(40px) 0 px2rem(28px);
      background: url("../assets/images/line.png") no-repeat center bottom/40% auto;
      text-align: center;
      @include font-dpr(36px);
    }
    .people-num {
      .icon-wode {
        margin-right: px2rem(8px);
      }
    }
    button {
      min-width: px2rem(160px);
      padding: px2rem(10px) 0;
      margin-left: px2rem(20px);
      @include font-dpr(14px);
      border: 1px solid $blue;
      border-radius: $btn-radius;
      color: $blue;
      background-color: transparent;
      &.active {
        color: #fff;
        background-color: $blue;
      }
      @include btnActive;
    }
    .time, .direction {
      display: flex;
      align-items: center;
      margin-top: px2rem(30px);
    }
  }
</style>
