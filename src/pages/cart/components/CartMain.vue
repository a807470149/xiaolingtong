<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="cart-empty" v-if="!count">
        <div class="info">
          <p class="tit">您的购物车还是空的!</p>
          <p class="login-desc">登陆之后将显示您之前加入的商品</p>
          <button class="login" @click="toLogin">立即登陆</button>
          <button class="shopping" @click="toSearch">马上去购物</button>
        </div>
      </div>

      <div class="cart-loading" v-else>
        <div class="cart-goods-list">
          <div class="list-head">
            <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
              label
              class="col col-check"
            >全选</el-checkbox>
            <div class="col col-img">&nbsp;</div>
            <div class="col col-name">商品名称</div>
            <div class="col col-price">单价</div>
            <div class="col col-num">数量</div>
            <div class="col col-total">小计</div>
            <div class="col col-action">操作</div>
          </div>

          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            class="list-body"
          >
            <div class="item-box" v-for="item in goodsList" :key="item.id">
              <el-checkbox :label="item" class="col col-check">&nbsp;</el-checkbox>

              <div class="col col-img">
                <img :src="item.imgUrl" alt>
              </div>
              <div class="col col-name">{{ item.name }}</div>
              <div class="col col-price">{{ item.price }}</div>
              <div class="col col-num">
                <el-input-number v-model="item.count" :min="1" label="描述文字"></el-input-number>
              </div>
              <div class="col col-total">{{ parseFloat(item.price) * item.count }}元</div>
              <div class="col col-action" @click="del(item.id)">X</div>
            </div>
          </el-checkbox-group>
        </div>

        <div class="cart-bar">
          <div class="section-left">
            共
            <span>{{ count }}</span>
            件商品，已选择
            <span>{{ selItem }}</span>件
          </div>
          <div class="total-price">
            合计:
            <span class="price">{{ selPrice }}</span>
            元
          </div>
          <button class="btn-primary">去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "CartMain",
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      isIndeterminate: false,
      selItem: 0,
      selPrice: 0
    };
  },
  methods: {
    ...mapMutations(["deleteCarpanelData"]),
    // 删除商品的方法
    del(id) {
      this.deleteCarpanelData(id);
      this.checkedCities.forEach((goods, index) => {
        if (id === goods.id) {
          this.checkedCities.splice(index, 1);
          return;
        }
      });
    },

    // 全选或者取消全选
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.goodsList : [];
      this.isIndeterminate = false;
    },

    // 部分选择
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.goodsList.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.goodsList.length;
    },

    toLogin() {
      this.$router.push({ path: "/login" });
    },
    toSearch() {
      this.$router.push({ path: "/search" });
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
  },
  watch: {
    // checkedCities(val) {
    //   this.selItem = 0;
    //   this.selPrice = 0;
    //   val.forEach(item => {
    //     this.selItem += item.count;
    //     this.selPrice += item.count * parseFloat(item.price);
    //   });
    // }
    checkedCities: {
      handler(val, oldval) {
        this.selItem = 0;
        this.selPrice = 0;
        val.forEach(item => {
        this.selItem += item.count;
        this.selPrice += item.count * parseFloat(item.price);
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  background-color: #f7f7f7;
  padding: 30px 0;
  .banxin {
    .cart-empty {
      background: url("/images/cart/cart-empty.png") no-repeat 124px center;
      height: 273px;
      padding: 65px 0 130px 558px;
      overflow: hidden;
      .info {
        .tit {
          font-size: 36px;
          margin: 100px 0 15px;
          color: #b0b0b0;
        }
        .login-desc {
          display: block;
          margin: 0 0 20px;
          font-size: 20px;
          color: #b0b0b0;
        }
        button {
          width: 172px;
          height: 50px;
          cursor: pointer;
        }
        button.login {
          background-color: rgb(250, 81, 89);
          color: #fff;
          margin-right: 10px;
        }
        button.shopping {
          border: 1px solid rgb(250, 81, 89);
          color: rgb(250, 81, 89);
          background-color: #f7f7f7;
        }
      }
    }

    .cart-loading {
      .cart-goods-list {
        background-color: #fff;

        // 列表头部
        .list-head {
          height: 70px;
          line-height: 70px;
          color: #424242;
          .col {
            float: left;
            color: #424242;
          }
          .col-check {
            width: 70px;
            margin-left: 30px;
          }
          .col-img {
            width: 120px;
          }
          .col-name {
            width: 380px;
          }
          .col-price {
            width: 140px;
            padding-right: 18px;
            text-align: center;
          }
          .col-num {
            width: 150px;
            text-align: center;
          }
          .col-total {
            width: 120px;
            padding-right: 81px;
            text-align: right;
          }
          .col-action {
            width: 80px;
            text-align: center;
          }
        }

        // 购物车商品列表
        .list-body {
          .item-box {
            padding: 15px 0px;
            border-top: 1px solid #e0e0e0;
            border-collapse: collapse;
            border-spacing: 0;
            height: 86px;
            line-height: 86px;
            &::after {
              content: "";
              display: block;
              clear: both;
            }
            .col {
              float: left;
              color: #424242;
            }
            .col-check {
              width: 70px;
              margin-left: 30px;
            }
            .col-img {
              width: 120px;
              img {
                width: 80px;
                height: 80px;
              }
            }
            .col-name {
              width: 380px;
            }
            .col-price {
              width: 140px;
              padding-right: 18px;
              text-align: center;
            }
            .col-num {
              width: 150px;
              text-align: center;
            }
            .col-total {
              width: 120px;
              padding-right: 81px;
              text-align: right;
            }
            .col-action {
              width: 80px;
              text-align: center;
              cursor: pointer;
              &:hover {
                color: rgb(250, 81, 89);
              }
            }
          }
        }
      }
      // 合计
      .cart-bar {
        height: 50px;
        line-height: 50px;
        background-color: #fff;
        margin-top: 30px;
        position: relative;
        .section-left {
          position: absolute;
          left: 0;
          margin: 0 20px;
          span {
            color: rgb(250, 81, 89);
            margin: 0 3px;
          }
        }

        .total-price {
          position: absolute;
          right: 230px;
          height: 100%;
          color: rgb(250, 81, 89);
          vertical-align: middle;
          span.price {
            font-size: 30px;
          }
        }
        button.btn-primary {
          position: absolute;
          right: 0;
          height: 50px;
          padding: 0 70px;
          background-color: rgb(250, 81, 89);
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<style lang="less">
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(250, 81, 89) !important;
  border-color: rgb(250, 81, 89) !important;
  &.hover {
    border-color: rgb(250, 81, 89) !important;
  }
}
.el-checkbox-group {
  font-size: 14px !important;
}
.el-checkbox__label {
  color: #424242 !important;
}
</style>
