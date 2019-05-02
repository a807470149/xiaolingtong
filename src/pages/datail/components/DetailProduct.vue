<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="pro-left">
        <img src="/images/detail/mi9.jpg" alt>
      </div>
      <div class="pro-right">
        <h1 class="title">小米9</h1>
        <p class="desc">
          <span>「全面现货，火爆热卖中」</span>
          全息幻彩全曲面玻璃机身 / 骁龙855旗舰处理器 / 索尼4800万超广角微距三摄 / 20W无线闪充 / 第5代极速屏下指纹解锁
        </p>
        <p class="aftersale-company">小米自营</p>
        <p class="price">3299元</p>
        <div class="address">
          <img src="/images/detail/weizhi.png" alt>
          <span>北京 北京市 东城区 安定门街道</span>
          <a href="javascript:;">修改</a>
          <p class="sale">有现货</p>
        </div>

        <p class="step-title">选择版本</p>
        <ul class="step-list">
          <li>
            <span class="name">8GB+128GB</span>
            <span class="price">3299元</span>
          </li>
          <li>
            <span class="name">6GB+128GB</span>
            <span class="price">2999元</span>
          </li>
          <li>
            <span class="name">8GB+256GB</span>
            <span class="price">3699元</span>
          </li>
        </ul>

        <p class="step-title">选择颜色</p>
        <ul class="step-list">
          <li>
            <img src="/images/detail/lan.jpg" alt>全息幻彩蓝
          </li>
          <li>
            <img src="/images/detail/hui.jpg" alt>深空灰
          </li>
          <li>
            <img src="/images/detail/zi.jpg" alt>全息幻彩紫
          </li>
        </ul>

        <p class="step-title">
          选择小米提供的意外保护
          <a href="JavaScript:;">了解意外保护></a>
        </p>
        <ul class="clearfix">
          <li>
            <div class="left">
              <el-checkbox v-model="checked1"></el-checkbox>
              <img src="/images/detail/bao.jpg " alt>
            </div>
            <div class="right">
              <p class="name">意外保障服务</p>
              <p class="desc">手机意外碎屏/进水/碾压等损坏</p>
              <p class="agreement">
                <el-checkbox v-model="checked1"></el-checkbox>我已阅读
                <span class="ser">服务条款</span> |
                <span class="prob">常见问题</span>
                <span class="price">299元</span>
              </p>
            </div>
          </li>
          <li>
            <div class="left">
              <el-checkbox v-model="checked2"></el-checkbox>
              <img src="/images/detail/bao.jpg " alt>
            </div>
            <div class="right">
              <p class="name">碎屏保障服务</p>
              <p class="desc">手机意外碎屏</p>
              <p class="agreement">
                <el-checkbox v-model="checked2"></el-checkbox>我已阅读
                <span class="ser">服务条款</span> |
                <span class="prob">常见问题</span>
                <span class="price">159元</span>
              </p>
            </div>
          </li>
        </ul>

        <p class="step-title">
          选择小米提供的延长保修
          <a href="JavaScript:;">了解延长保修></a>
        </p>
        <ul class="clearfix">
          <li>
            <div class="left">
              <el-checkbox v-model="checked3"></el-checkbox>
              <img src="/images/detail/bao.jpg " alt>
            </div>
            <div class="right">
              <p class="name">延长保修服务</p>
              <p class="desc">厂保延一年,性能故障免费维修</p>
              <p class="agreement">
                <el-checkbox v-model="checked3"></el-checkbox>我已阅读
                <span class="ser">服务条款</span> |
                <span class="prob">常见问题</span>
                <span class="price">99元</span>
              </p>
            </div>
          </li>
        </ul>

        <div class="result">
          <ul>
            <li>小米9 全网通版 6GB+128GB 深空灰</li>
          </ul>
          <p>总计 ：2999元</p>
        </div>
        <div class="btn">
          <button class="btn-primary" @click="handleaddCarNum">加入购物车</button>
          <button class="btn-like">喜欢</button>
        </div>

        <ul class="pro-policy">
          <li>小米自营</li>
          <li>小米发货</li>
          <li>7天无理由退货</li>
          <li>运费说明</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  name: "DetailProduct",
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      goodsList: [
        {
          id: "011",
          imgUrl: "/images/search/mi9.jpg",
          name: "小米9透明尊享版12GB+256GB",
          price: "2000元",
          show: false
        }
      ]
    }
  },
  methods: {
    handleaddCarNum (data) {
      this.addCarpanelData(data);
    },
    ...mapMutations(["addCarpanelData"])
  },
  computed: {}
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  // background-color: #f0f0f0;
  padding-top: 10px;
  padding-bottom: 30px;
  .banxin {
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    .pro-left {
      float: left;
      img {
        width: 560px;
        height: 560px;
      }
    }
    .pro-right {
      float: left;
      width: 628px;
      // height: 500px;
      margin-left: 12px;
      .title {
        font-size: 27px;
        margin: 10px 0;
      }
      .desc {
        color: #666;
        line-height: 20px;
        span {
          color: rgb(250, 81, 89);
        }
      }
      .aftersale-company {
        color: rgb(250, 81, 89);
        margin-top: 14px;
      }
      p.price {
        padding: 12px 0 20px;
        color: rgb(250, 81, 89);
        font-size: 18px;
        border-bottom: 1px solid #e0e0e0;
      }

      .address {
        margin: 40px 0;
        border: 1px solid #ccc;
        padding: 30px 40px 30px 50px;
        position: relative;
        line-height: 20px;
        color: #666;
        img {
          width: 20px;
          heigth: 20px;
          position: absolute;
          top: 30px;
          left: 20px;
        }
        a {
          margin: 0 20px;
          color: rgb(250, 81, 89);
        }
        p.sale {
          color: rgb(250, 81, 89);
        }
      }
      .step-title {
        font-size: 18px;
        margin-top: 30px;
        a {
          color: rgb(250, 81, 89);
          float: right;
          font-size: 14px;
        }
      }
      ul.step-list {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          width: 198px;
          height: 42px;
          border: 1px solid #ccc;
          margin-top: 15px;
          margin-left: 6px;
          padding: 0 50px;
          line-height: 42px;
          font-size: 18px;
          cursor: pointer;
          .name {
            margin-right: 30px;
          }
          .price {
            color: #ccc;
          }
          img {
            width: 16px;
            height: 16px;
            margin-right: 20px;
          }
        }
      }
      .clearfix {
        margin-top: 10px;
        li {
          padding: 30px 0;
          border: 1px solid #ccc;
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          .left {
            float: left;
            margin-left: 50px;
            img {
              margin: 0 20px;
            }
          }
          .right {
            float: left;
            width: 370px;
            line-height: 30px;
            .name {
              font-size: 18px;
            }
            .desc {
              color: #ccc;
            }
            .agreement {
              .ser,
              .prob {
                color: rgb(250, 81, 89);
                cursor: pointer;
              }
              span.price {
                float: right;
              }
            }
          }
        }
      }

      .result {
        margin: 30px 0;
        padding: 30px;
        background-color: #f0f0f0;
      }
      .btn {
        .btn-primary {
          width: 300px;
          height: 54px;
          color: #fff;
          background-color: rgb(250, 81, 89);
          margin-right: 10px;
          font-size: 18px;
          cursor: pointer;
        }
        .btn-like {
          width: 142px;
          height: 54px;
          color: #fff;
          font-size: 18px;
          background-color: #999;
          cursor: pointer;
        }
      }
      .pro-policy {
        color: #ccc;
        margin: 10px 0;
        line-height: 30px;
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>

<style lang="less">
.el-checkbox {
  margin-right: 10px !important;
}
</style>