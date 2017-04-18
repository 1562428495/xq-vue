<template>
  <div class="page_bd">
    <service-list></service-list>
    <div class="select-wrap">
      <div class="title">86城际</div>
    </div>
    <route-list></route-list>

  </div>
</template>
<script type="text/ecmascript-6">
  import serviceList from '@/components/serviceList'
  import routeList from '@/components/routeList'

  export default {
    components: {
      'service-list': serviceList,
      'route-list': routeList
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .page_bd {
    padding-top: px2rem(40px);
  }
  .select-wrap {
    margin-bottom: px2rem(40px);
    color: $blue;
    @include font-dpr(14px);
    .title {
      padding: px2rem(40px) 0 px2rem(28px);
      background: url("../assets/images/line.png") no-repeat center bottom/40% auto;
      text-align: center;
      @include font-dpr(36px);
    }
  }
</style>
