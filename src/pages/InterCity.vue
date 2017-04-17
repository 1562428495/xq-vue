<template>
  <div class="page_bd">
    <service-list></service-list>
  </div>
</template>
<script type="text/ecmascript-6">
  import serviceList from '@/components/serviceList'
  export default {
    components: {
      'service-list': serviceList
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .page_bd {
    padding-top: px2rem(40px);
  }
</style>
