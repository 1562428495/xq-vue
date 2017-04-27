<template>
  <div class="con" :list="list">
    <div class="item" v-for="item in list">
      <div class="title">{{item.title}}</div>
      <div class="route" v-for="route in item.items">
        <div class="price"><span>¥</span>{{route.price}}</div>
        <div class="name">{{route.name}}</div>
        <div class="route-point"><span class="start">{{route.beginPoint}}</span>→<span class="finish">{{route.endPoint}}</span></div>
        <div class="button-group">
          <div class="btn" v-for="time in route.time">
            <button>{{time}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      list: Array
    },
    data() {
      return {}
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/index";
  .item {
    margin-bottom: px2rem(60px);
  }
  .title {
    @include font-dpr(16px);
    color: $orange;
    margin-bottom: px2rem(20px);
  }
  .route {
    position: relative;
    padding: px2rem(20px);
    margin-bottom: px2rem(40px);
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
