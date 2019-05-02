<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="xlt-login-bg">
        <a href="javascript:;" class="bigLink"></a>
        <div class="xlt-login-box">
          <div class="nav-tabs">
            <a href="javascript:void(0);" class="link1">账号登录</a>
            <span class="line"></span>
            <a href="javascript:void(0);" class="link2">扫码登录</a>
          </div>

          <div class="login-area">
            <form action="/pass/serviceLoginAuth2" method="POST">
              <div class="login-area-box1">
                <label for class="user">
                  <input type="text" placeholder="邮箱/手机号码/小玲通ID">
                </label>
                <label for class="password">
                  <input type="text" placeholder="密码">
                </label>
              </div>
            </form>
          </div>

          <div class="btns-bg">登录</div>
          <div class="other clearfix">
            <span class="sms-link">
              <a href="javascript:;" class="smsLink">手机短信登录/注册</a>
            </span>
            <div class="reverse">
              <a
                class="outer-link"
                href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%253Fclient_id%253D180100041086%26sign%3DMzU2MGI1MjBiZWJhOTQyYTdmZmRhZDViM2NkMTFiMWQwZDAyMjE4ZQ%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180&_locale=zh_CN"
              >立即注册</a>
              <span>|</span>
              <a
                class="outer-link"
                href="https://account.xiaomi.com/pass/forgetPassword?callback=https%3A%2F%2Forder.mi.com%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252F%253Fclient_id%253D180100041086%26sign%3DMzU2MGI1MjBiZWJhOTQyYTdmZmRhZDViM2NkMTFiMWQwZDAyMjE4ZQ%2C%2C&sid=mi_eshop&_bannerBiz=mistore&_qrsize=180&_locale=zh_CN"
              >忘记密码？</a>
            </div>
          </div>
          <div class="area-footer">
            <fieldset>
              <legend>其他登录方式</legend>
            </fieldset>
            <div class="icon-type">
              <a
                class="icon-qq"
                target="_blank"
                href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=100284651&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=7b22736964223a226d695f6573686f70222c227469636b6574223a22343332323330222c226c6f63616c65223a227a685f434e222c2263616c6c6261636b223a2268747470732533412532462532466f726465722e6d692e636f6d2532466c6f67696e25324663616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532467777772e6d692e636f6d25323532462532353346636c69656e745f696425323533443138303130303034313038362532367369676e2533444d7a55324d4749314d6a42695a574a684f5451795954646d5a6d52685a4456694d324e6b4d5446694d5751775a4441794d6a45345a51253243253243222c226170706964223a22313030323834363531227d"
              ></a>
              <a
                class="icon-weixin"
                target="_blank"
                href="https://open.weixin.qq.com/connect/qrconnect?appid=wxa21de3acc0d5e79b&redirect_uri=https%3A%2F%2Faccount.xiaomi.com%2Fpass%2Fsns%2Flogin%2Fload&response_type=code&scope=snsapi_login&state=WEIXIN825280#wechat_redirect"
              ></a>
              <a
                class="icon-weibo"
                target="_blank"
                href="https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://account.xiaomi.com/pass/sns/login/load&state=7b22736964223a226d695f6573686f70222c227469636b6574223a22363439373333222c226c6f63616c65223a227a685f434e222c2263616c6c6261636b223a2268747470732533412532462532466f726465722e6d692e636f6d2532466c6f67696e25324663616c6c6261636b253346666f6c6c6f77757025334468747470732532353341253235324625323532467777772e6d692e636f6d25323532462532353346636c69656e745f696425323533443138303130303034313038362532367369676e2533444d7a55324d4749314d6a42695a574a684f5451795954646d5a6d52685a4456694d324e6b4d5446694d5751775a4441794d6a45345a51253243253243222c226170706964223a2232393936383236323733227d"
              ></a>
              <a
                class="icon-zhifubao"
                target="_blank"
                href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dbee73417eb625d74503d389662e701be"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBody"
};
</script>


<style lang="less" scoped>
@import "~@/assets/styles/main.css";

.tonglan {
  background-color: #f3f6ff;
  .banxin {
    .xlt-login-bg {
      width: 100%;
      height: 560px;
      background-image: url("/images/login/login-bg.jpg");
      background-repeat: no-repeat;
      background-position: top center;
      position: relative;
      .bigLink {
        display: block;
        width: 100%;
        height: 560px;
      }
      .xlt-login-box {
        width: 410px;
        height: 520px;
        box-shadow: 6px 6px 6px #ccc;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #fff;
        .nav-tabs {
          width: 100%;
          height: 28px;
          padding: 27px 0 24px;
          text-align: center;
          font-size: 24px;
          .link1 {
            color: rgb(250, 81, 89);
          }
          .line {
            width: 1px;
            height: 24px;
            margin: 0 35px 0 42px;
            border: 1px solid #e0e0e0;
          }
          .link2 {
            color: #666666;
            &:hover {
              color: rgb(250, 81, 89);
            }
          }
        }

        .login-area {
          .login-area-box1 {
            input {
              width: 306px;
              height: 22px;
              line-height: 22px;
              padding: 13px 16px 13px 14px;
              display: block;
              border: 1px solid #ccc;
              color: #4a4a4a;
              margin: 10px 0 20px 35px;
            }
          }
        }
        .btns-bg {
          width: 83%;
          margin: 0 auto;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          background-color: rgb(250, 81, 89);
          margin-top: 30px;
        }
        .other {
          width: 83%;
          margin: 0 auto;
          margin-top: 16px;
          .sms-link {
            float: left;
            .smsLink {
              color: rgb(250, 81, 89);
            }
          }
          .reverse {
            float: right;
            .outer-link {
              color: #999;
              &:hover {
                color: rgb(250, 81, 89);
              }
            }
            span {
              color: #999;
            }
          }
        }
        .area-footer {
          width: 83%;
          margin: 0 auto;
          margin-top: 100px;
          fieldset {
            border-top: 1px solid #e0e0e0;
            padding-top: 10px;
            legend {
              color: #bbb;
              margin: 0 auto;
            }
          }
          .icon-type {
            padding-top: 6px;
            width: 236px;
            margin: 0 auto;
            a {
              display: inline-block;
              width: 36px;
              height: 36px;
              background-size: contain;
              margin: 2px 10px;
            }
            a.icon-qq {
              background-image: url("/images/login/qq.png");
            }
            a.icon-weixin {
              background-image: url("/images/login/weixin.png");
            }
            a.icon-weibo {
              background-image: url("/images/login/weibo.png");
            }
            a.icon-zhifubao {
              background-image: url("/images/login/zhifubao.png");
            }
          }
        }
      }
    }
  }
}
</style>
