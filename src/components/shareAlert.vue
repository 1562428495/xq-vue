<template>
  <div class="share">
    <div class="img_txt">
      <img src="http://css.8684.com/xq/images/share_layer_t1.png">
    </div>
    <div class="img_bot">

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/function";
  .share {
    z-index: 1000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(#000, .8);
  }
  .img_txt {
    width: 80%;
    margin: 8vh auto;
    text-align: center;
  }
  .img_bot {
    width: 80%;
    height: 50vh;
    margin: 0 auto;
    background: url("http://css.8684.com/xq/images/share_layer.png") no-repeat center center/contain;
  }
</style>
