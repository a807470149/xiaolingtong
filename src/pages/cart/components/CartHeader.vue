<template>
  <div class="tonglan">
    <div class="banxin">
      <img src="/images/logo.png" alt="" @click="toHome">
      <div class="header-title">
        <h1>我的购物车</h1>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </div>
      <div class="topbar-info">
        <span class="login" @click="toLogin" v-if="!user">登陆 / 注册</span>
        <span v-else>欢迎,{{ user }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getStore } from "../../../localStorage.js";
export default {
  name: "CartHeader",
  data() {
    return {
      user:''
    }
  },
   mounted() {
    this.user = localStorage.getItem("phone");
  },
  methods: {
    toHome() {
      this.$router.push({path: "/"})
    },
    toLogin() {
      this.$router.push({path: "/login"})
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  border-bottom: 2px solid rgb(250, 81, 89);
  .banxin {
    height: 100px;
    line-height: 100px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    img {
      background-color: rgb(250, 81, 89);
      float: left;
      margin-top: 25px;
      margin-right: 25px;
      cursor: pointer;
    }
    .header-title {
      float: left;
      h1 {
        font-size: 25px;
        float: left;
        margin-right: 20px;
      }
      span {
        color: #666;
      }
    }
    .topbar-info {
      float: right;
      span.login {
        color: #999;
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
}
</style>

