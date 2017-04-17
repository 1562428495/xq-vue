<template>
  <footer id="footer">
    <div class="copyRight">©2017 xq.8684.com</div>
    <div class="entrance">
      <a href="" class="entrance">补票专用</a>
    </div>
    <div class="msg"></div>
  </footer>
</template>
<script type="text/ecmascript-6">
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  #footer {
    margin-top: px2rem(40px);
  }
  .copyRight {
    text-align: center;
    color: $blue;
  }
  .entrance {
    margin: px2rem(10px) 0;
    text-align: center;
    a {
      display: inline-block;
      padding: px2rem(10px);
      @include font-dpr(14px);
      color: $orange;
      border: 1px solid $orange;
    }
  }
</style>
