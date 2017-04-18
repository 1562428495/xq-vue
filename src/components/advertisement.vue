<template>
  <div class="advertisement">
    <img src="http://css.8684.com/xq/images/adv.png">
    <i class="icon icon-close"></i>
  </div>
</template>
<script type="text/ecmascript-6">
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .advertisement {
    position: relative;
    width: 96%;
    margin: 0 auto;
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
