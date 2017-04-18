<template>
  <div class="loading-wrap">
    <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/function";
  .loading-wrap {
    z-index: 1000;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(#000, .8);
  }
  .loadEffect{
    position: relative;
    width: px2rem(110px);
    height: px2rem(110px);
  }
  .loadEffect span{
    display: inline-block;
    width: px2rem(20px);
    height: px2rem(20px);
    border-radius: 50%;
    background: #fff;
    position: absolute;
    -webkit-animation: load 1.04s linear infinite;
  }
  @-webkit-keyframes load{
    0%{
      -webkit-transform: scale(1.2);
      opacity: 1;
    }
    100%{
      -webkit-transform: scale(.3);
      opacity: 0.5;
    }
  }
  .loadEffect span:nth-child(1){
    left: 0;
    top: 50%;
    margin-top: px2rem(-10px);
    -webkit-animation-delay:0.13s;
  }
  .loadEffect span:nth-child(2){
    left: px2rem(14px);
    top: px2rem(14px);
    -webkit-animation-delay:0.26s;
  }
  .loadEffect span:nth-child(3){
    left: 50%;
    top: 0;
    margin-left: px2rem(-10px);
    -webkit-animation-delay:0.39s;
  }
  .loadEffect span:nth-child(4){
    top: px2rem(14px);
    right: px2rem(14px);
    -webkit-animation-delay:0.52s;
  }
  .loadEffect span:nth-child(5){
    right: 0;
    top: 50%;
    margin-top: px2rem(-10px);
    -webkit-animation-delay:0.65s;
  }
  .loadEffect span:nth-child(6){
    right: px2rem(14px);
    bottom: px2rem(14px);
    -webkit-animation-delay:0.78s;
  }
  .loadEffect span:nth-child(7){
    bottom: 0;
    left: 50%;
    margin-left: px2rem(-10px);
    -webkit-animation-delay:0.91s;
  }
  .loadEffect span:nth-child(8){
    bottom: px2rem(14px);
    left: px2rem(14px);
    -webkit-animation-delay:1.04s;
  }
</style>
