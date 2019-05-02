<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="xlt-login">
        <div class="xlt-login-panel">
          <div class="logo">
            <a href="javascript:;">
              <div class="left">
                <img src="/images/login/ling-logo.png" alt @click="toHome">
              </div>
              <div class="right">
                <div class="xlt-login-w1">小玲通商城</div>
                <div class="xlt-login-w2">让每个人都能享受到科技的乐趣</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginHeader",
  methods: {
    toHome () {
      this.$router.push({path: "/"});
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  .banxin {
    .xlt-login-panel {
      .logo {
        a {
          display: block;
          width: 235px;
          height: 60px;
          margin: 10px;
          text-align: center;
          padding: 10px;
          .left {
            float: left;
            img {
              width: 55px;
              height: 55px;
              background-color: rgb(250, 81, 89);
            }
          }
          .right {
            float: right;
            .xlt-login-w1 {
              color: #333;
              font-size: 30px;
              font-weight: bold;
              font-family: "Arial Black", Gadget, sans-serif;
              margin: 6px;
            }
            .xlt-login-w2 {
              color: #666666;
              font-size: 11px;
              font-family: "Comic Sans MS", cursive, sans-serif;
            }
          }
        }
      }
    }
  }
}
</style>
