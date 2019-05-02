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
              <a
                href="?callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%253Fclient_id%253D180100041086%26sign%3DMzU2MGI1MjBiZWJhOTQyYTdmZmRhZDViM2NkMTFiMWQwZDAyMjE4ZQ%2C%2C&amp;sid=mi_eshop&amp;_bannerBiz=mistore&amp;_qrsize=180&amp;_locale=zh_TW"
              >繁体</a> |
            </li>
            <li>
              <a
                href="?callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%253Fclient_id%253D180100041086%26sign%3DMzU2MGI1MjBiZWJhOTQyYTdmZmRhZDViM2NkMTFiMWQwZDAyMjE4ZQ%2C%2C&amp;sid=mi_eshop&amp;_bannerBiz=mistore&amp;_qrsize=180&amp;_locale=en"
              >English</a> |
            </li>
            <li>
              <a href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank">常见问题</a> |
            </li>
            <li>
              <a href="https://www.mi.com/about/privacy/" target="_blank">隐私策略</a>
            </li>
          </ul>
        </div>
        <p>
          小米公司版权所有-京ICP备10046444-
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
            target="_blank"
          >
            <span>
              <img
                src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
                alt
              >
            </span>
            京公网安备11010802020134号
          </a>
          -京ICP证110507号
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
          color:#333;
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

