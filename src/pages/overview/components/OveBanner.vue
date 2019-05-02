<template>
  <div class="tonglan">
    <div class="banner">
      <img src="/images/overview/index3.jpg" alt>

      <div class="txt">
        <div class="title">小米9 战斗天使</div>
        <div class="des">好看又能打</div>
        <div class="price">
          ￥
          <span>2999</span> 元起
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OveBanner"
};
</script>

<style lang="less" scoped>
.tonglan {
  background-color: #f0f0f0;
  .banner {
    position: relative;
    text-align: center;
    img {
      width: 100%;
    }
    .txt {
      width: 100%;
      position: absolute;
      top: 0;
      .title {
        color: #fff;
        font-size: 30px;
        margin-top: 50px;
      }
      .des {
        color: #fff;
        font-size: 60px;
        margin-top: 20px;
      }
      .price {
        color: #ecb41f;
        font-size: 20px;
        margin-top: 30px;
        span {
          font-size: 30px;
        }
      }
    }
  }
}
</style>

