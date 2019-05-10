<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="left">
        <span class="title">小米9</span>
        <span class="pro">小米9 SE</span>
        <span class="pro">小米9 透明尊享版</span>
      </div>
      <div class="right">
        <span class="first" @click="toOverview">概述</span>
        <span>参数</span>
        <span>用户评价</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTop",
  methods: {
    toOverview () {
      this.$router.push({path:"/overview"})
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  .banxin {
    .left {
      float: left;
      .title {
        font-size: 18px;
        padding: 0 10px;
        border-left: 0;
      }

      span {
        color: #666;
        font-size: 12px;
        padding: 0 10px;
        border-left: 1px solid #ccc;
        cursor: pointer;
      }
      span.pro:hover {
        color: rgb(250, 81, 89);
      }
    }
    .right {
      float: right;

      span {
        color: #666;
        padding: 0 10px;
        border-left: 1px solid #ccc;
        cursor: pointer;
        &:hover {
          color: rgb(250, 81, 89);
        }
        &.first {
          border-left: 0;
        }
      }
    }
  }
}
</style>
