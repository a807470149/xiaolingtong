<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="banner">
        <img :src="product.bannerList[0]" alt>
      </div>

      <div class="box">
        <div class="title">
          <div class="title-left">{{ product.title }}</div>
          <div class="title-right">查看全部 ></div>
        </div>

        <div class="product">
          <div class="product-left">
            <img :src="product.bannerList[1]" alt>
            <img :src="product.bannerList[2]" alt>
          </div>
          <ul class="product-right">
            <li v-for="item in product.productList" :key="item.id">
              <p>
                <span class="flag" v-if="item.flag">{{ item.flag }}</span>
              </p>
              <router-link to="/detail" target="_blank">
                <img :src="item.imgUrl" alt>
              </router-link>
              
              <p class="name">{{ item.name }}</p>
              <p class="dec">{{ item.dec }}</p>
              <div class="price">{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeProduct",
  data () {
    return {}
  },
  props: {
    product: Object
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";

.tonglan {
  padding: 30px 0;
  background-color: #f0f0f0;
  .banxin {
    .banner {
      img {
        width: 1200px;
        cursor: pointer;
      }
    }
    .box {
      margin-top: 30px;
      .title {
        height: 58px;
        line-height: 58px;
        .title-left {
          float: left;
          font-size: 20px;
        }
        .title-right {
          float: right;
          cursor: pointer;
          &:hover {
            color: rgb(250, 81, 89);
          }
        }
      }

      .product {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .product-left {
          float: left;
          width: 234px;
          img {
            width: 234px;
            cursor: pointer;
            margin-bottom: 14px;
            &:hover {
              box-shadow: 0 15px 30px rgba(0,0,0,0.1);
              transform: translate3d(0, -2px, 0);
              transition: all .2s linear;
            }
          }
        }
        .product-right {
          float: right;
          width: 966px;
          li {
            background-color: #fff;
            width: 230px;
            height: 300px;
            text-align: center;
            margin-left: 10px;
            margin-bottom: 14px;
            float: left;
            &:hover {
              box-shadow: 0 15px 30px rgba(0,0,0,0.1);
              transform: translate3d(0, -2px, 0);
              transition: all .2s linear;
            }
            p {
              height: 24px;
              line-height: 24px;
              .flag {
                background-color: lightgreen;
                padding: 4px 20px;
                color: #fff;
                margin-top: 10px;
              }
            }
            img {
              width: 160px;
              height: 160px;
              cursor: pointer;
            }
            .name {
              cursor: pointer;
            }
            .dec {
              margin: 0 10px 20px;
              font-size: 12px;
              color: #ccc;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .price {
              color: rgb(250, 81, 89);
            }
          }
        }
      }
    }
  }
}
</style>
