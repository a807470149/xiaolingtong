<template>
  <div class="tonglan">
    <div class="banxin">
      <el-row>
        <el-col :span="19">
          <ul>
            <li>
              <span class="txt">小米商城</span>
            </li>
            <li>
              <span class="txt">MIUI</span>
            </li>
            <li>
              <span class="txt">IoT</span>
            </li>
            <li>
              <span class="txt">云服务</span>
            </li>
            <li>
              <span class="txt">金融</span>
            </li>
            <li>
              <span class="txt">有品</span>
            </li>
            <li>
              <span class="txt">小爱开放平台</span>
            </li>
            <li>
              <span class="txt">政企服务</span>
            </li>
            <li>
              <span class="txt">资质证照</span>
            </li>
            <li>
              <span class="txt">协议规则</span>
            </li>
            <li>
              <span class="txt">下载app</span>
            </li>
            <li class="noline">
              <span class="txt">Select Region</span>
            </li>
          </ul>
        </el-col>
        <el-col :span="5">
          <ul>
            <li>
              <span class="txt" @click="toLogin">登陆</span>
            </li>
            <li>
              <span class="txt">注册</span>
            </li>
            <li class="noline">
              <span class="txt">消息通知</span>
            </li>
            <li class="cart" @click="toCart" @mouseenter="show3 = true" @mouseleave="show3 = false">
              <span>购物车({{ count }})</span>
            </li>
          </ul>
        </el-col>
      </el-row>

      <div class="cart-box" @mouseenter="show3 = true" @mouseleave="show3 = false">
        <el-collapse-transition>
          <div v-show="show3" class="cart-goods">
            <p v-if="!count">
              购物车中还没有商品,赶紧选购吧!
            </p>

            <div class="carpanel-box" v-else>
              <ul class="carpanel-list">
                <li v-for="item in goodsList" :key="item.id">
                  <img :src="item.imgUrl" alt="">
                  <span class="name">{{ item.name }}</span>
                  <span class="price">
                    {{ item.price }}×{{ item.count }}
                  </span>
                  <span class="delete" @click="del(item.id)">X</span>
                </li>
              </ul>
              <div class="settlement">
                <div class="stlm-left">
                  <p class="goods-count">
                    共{{ count }}件商品
                  </p>
                  <p class="total-amount">
                    {{ price }}元
                  </p>
                </div>
                <button class="stlm-right" @click="toCart">
                  去购物车结算
                </button>
              </div>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations, mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      activeName: "second",
      show3: false
    };
  },
  methods: {
    ...mapMutations(["deleteCarpanelData"]),
    del (id) {
      this.deleteCarpanelData(id)
    },
    toCart() {
      this.$router.push({path:"/cart"})
    },
    toLogin() {
      this.$router.push({path:"/login"})
    }
  },
  computed: {
    ...mapState({
      goodsList: "goodsList"
    }),
    ...mapGetters({
      count: "totleCount",
      price: "totlePrice"
    })
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";

.tonglan {
  background-color: #333;
  .banxin {
    position: relative;
    .el-col {
      height: 40px;
      line-height: 40px;
      color: #ccc;
      font-size: 12px;
      ul {
        li {
          float: left;

          .txt {
            padding: 0 6px;
            border-right: 1px solid #666;
            &:hover {
              color: #fff;
              cursor: pointer;
            }
          }
          &.noline {
            .txt {
              border-right: 0;
            }
          }
        }
        li.cart {
          width: 104px;
          height: 100%;
          background-color: #424242;
          margin-left: 10px;
          text-align: center;
          cursor: pointer;
          .txt {
            border-right: 0;
          }
          &:hover {
            background-color: #fff;
            color: rgb(250, 81, 89);
          }
        }
      }
    }
    .cart-box {
      position: absolute;
      top: 40px;
      right: 0;
      z-index: 10000;
      width: 300px;
      padding: 0 20px;
      background-color: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
      .cart-goods {
        text-align: center;
        width: 100%;
        line-height: 100px;
        .carpanel-box {
          ul.carpanel-list {
            li {
              width: 300px;
              height: 80px;
              border-bottom: 1px solid #ccc;
              text-align: left;
              line-height: 80px;
              // margin: 0 10px;
              position: relative;
              img {
                width: 60px;
                height: 60px;
                position: absolute;
                left: 0;
                top: 10px;
              }
              span.name {
                position: absolute;
                left: 60px;
                width: 130px;
                height: 80px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              span.price {
                position: absolute;
                left: 210px;
              }
              span.delete {
                position: absolute;
                right: 0;
                color: #666;
                cursor: pointer;
                &:hover {
                  color: rgb(250, 81, 89);
                }
              }
            }
          }

          .settlement {
            margin: 20px 0;
            &::after {
              content: "";
              display: block;
              clear: both;
            }
            .stlm-left {
              float: left;
              line-height: 30px;
              margin-left: 10px;
              .goods-count {
                color: #666;
              }
              .total-amount {
                color: rgb(250, 81, 89);
                font-size: 20px;
              }
            }
            button.stlm-right {
              float: right;
              margin-top: 10px;
              width: 120px;
              height: 40px;
              background-color: rgb(250, 81, 89);
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
