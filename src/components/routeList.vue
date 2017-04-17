<template>
  <div class="con">
    <div class="item">
      <div class="title">岗顶/石牌桥/体育西路</div>
      <div class="route">
        <div class="price"><span>¥</span>14</div>
        <div class="name">岗顶线</div>
        <div class="route-point"><span class="start">岭南雅筑</span>→<span class="finish">岗顶/石牌桥/体育西路</span></div>
        <div class="button-group">
          <div class="btn">
            <button>07:00</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .title {
    @include font-dpr(16px);
    color: $orange;
    margin-bottom: px2rem(20px);
  }
  .route {
    position: relative;
    padding: px2rem(20px);
    border: 1px dashed #333;
    color: $blue;
    .price {
      position: absolute;
      right: px2rem(20px);
      top: px2rem(20px);
      @include font-dpr(20px);
      color: $orange;
    }
    .name {
      @include font-dpr(16px);
      padding-bottom: px2rem(10px);
    }
    .route-point {
      padding-bottom: px2rem(20px);
    }
    .button-group {
      display: flex;
      flex-wrap: wrap;
      .btn {
        flex: 1 1 25%;
        text-align: center;
        margin-top: px2rem(20px);
        button {
          width: 90%;
          height: 100%;
          border: 1px solid $blue;
          border-radius: $btn-radius;
          line-height: px2rem(60px);
          background-color: transparent;
          @include font-dpr(14px);
          color: $blue;

          @include btnActive;
        }
      }
    }
  }
</style>
