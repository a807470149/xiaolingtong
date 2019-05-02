<template>
  <div class="tonglan">
    <div class="banxin">
      <ul class="top">
        <li class="first">预约维修服务</li>
        <li>7天无理由退货</li>
        <li>15天免费换货</li>
        <li>满150元包邮</li>
        <li>520余家售后网点</li>
      </ul>
      <div class="body">
        <ul>
          <li>
            <div class="title">帮助中心</div>
            <p>账户管理</p>
            <p>购物指南</p>
            <p>订单操作</p>
          </li>
          <li>
            <div class="title">服务支持</div>
            <p>售后政策</p>
            <p>自助服务</p>
            <p>相关下载</p>
          </li>
          <li>
            <div class="title">线下门店</div>
            <p>小米之家</p>
            <p>服务网点</p>
            <p>授权体验店</p>
          </li>
          <li>
            <div class="title">关于小米</div>
            <p>了解小米</p>
            <p>加入小米</p>
            <p>投资者关系</p>
          </li>
          <li>
            <div class="title">关注我们</div>
            <p>新浪微博</p>
            <p>官方微博</p>
            <p>联系我们</p>
          </li>
          <li>
            <div class="title">特色服务</div>
            <p>F码通道</p>
            <p>礼物码</p>
            <p>防伪查询</p>
          </li>
        </ul>
        <div class="rex">
          <p class="phone">XXX-XXX-XXXX</p>
          <p class="time">周一至周日8:00 - 18:00</p>
          <p class="time">(仅收市话费)</p>
          <button>联系客服</button>
        </div>
      </div>
      <div class="footer">
        <ul>
          <li class="first">小米商城</li>
          <li>MIUI</li>
          <li>米家</li>
          <li>米聊</li>
          <li>多看</li>
          <li>游戏</li>
          <li>路由器</li>
          <li>米粉卡</li>
          <li>政企服务</li>
          <li>小米天猫店</li>
          <li>隐私政策</li>
          <li>商城用户协议</li>
          <li>账号协议</li>
          <li>问题反馈</li>
          <li>廉正举报</li>
          <li>诚信合规</li>
          <li>Select Regio</li>
        </ul>
        <p>© XX.com 粤ICP证XXXXXX号 粤ICP备XXXXXXXX号 京公网安备11010802020134号 京网文[2017]1530-131号 </p>
        <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京) -非经营性-2014-0090 营业执照 医疗器械公告 </p>
        <p>增值电信业务许可证  网络食品经营备案（京）【2018】WLSPJYBAHF-12   食品经营许可证 </p>
        <p>违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  .banxin {
    .top {
      padding: 27px 0;
      border-bottom: 1px solid #ccc;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      li {
        width: 239px;
        float: left;
        text-align: center;
        font-size: 16px;
        border-left: 1px solid #ccc;
        .txt {
          width: 230px;
        }
      }
      li.first {
        border-left: 0;
      }
    }
    .body {
      padding: 40px 0;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      ul {
        float: left;
        border-right: 1px solid #ccc;
        li {
          width: 160px;
          float: left;
          p {
            color: #666;
            margin: 10px 0;
            cursor: pointer;
            &:hover {
              color: rgb(250, 81, 89);
            }
          }
          div.title {
            color: #333;
            margin-bottom: 20px;
          }
        }
      }
      .rex {
        float: right;
        text-align: center;
        p.phone {
          color: rgb(250, 81, 89);
          font-size: 20px;
          margin-bottom: 8px;
        }
        p.time {
          font-size: 12px;
          margin: 8px 0;
        }
        button {
          margin-top: 8px;
          padding: 4px 30px;
          background-color: #fff;
          color: rgb(250, 81, 89);
          border: 1px solid rgb(250, 81, 89);
          cursor: pointer;
          &:hover {
            background-color: rgb(250, 81, 89);
            color: #fff;
          }
        }
      }
    }
    .footer {
      text-align: center;
      ul {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          cursor: pointer;
          padding: 0 6px;
          border-left: 1px solid #ccc;
          color: #999;
          &.first {
            border-left: 0;
          }
          &:hover {
            color: rgb(250, 81, 89);
          }
        }
      }
      p {
        color: #ccc;
        margin: 6px 0;
      }
    }
  }
}
</style>