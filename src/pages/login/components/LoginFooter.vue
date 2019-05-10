<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="xlt-login-footer">
        <div class="clearfix">
          <ul>
            <li>
              <a href="javascript:void(0)">简体</a> |
            </li>
            <li>
              <a href="#">繁体</a> |
            </li>
            <li>
              <a href="#">English</a> |
            </li>
            <li>
              <a href="#" target="_blank">常见问题</a> |
            </li>
            <li>
              <a href="#" target="_blank">隐私策略</a>
            </li>
          </ul>
        </div>
        <p>
          XX公司版权所有-粤ICP备XXXXXXXX-
          <a href="#" target="_blank">
            <span>
              <img
                src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
                alt
              >
            </span>
            粤公网安备XXXXXXXXXXXXX号
          </a>
          -粤ICP证XXXXX号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginFooter"
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  .banxin {
    .xlt-login-footer {
      color: #757575;
      text-align: center;
      ul {
        width: 350px;
        margin: 0 auto;
        margin-top: 100px;
        height: 40px;
        line-height: 40px;
        li {
          float: left;
          a {
            color: #757575;
            display: inline-block;
            padding: 0 10px;
          }
          a:hover {
            color: #333;
          }
        }
      }

      p {
        height: 40px;
        a {
          color: #757575;
        }
      }
    }
  }
}
</style>

