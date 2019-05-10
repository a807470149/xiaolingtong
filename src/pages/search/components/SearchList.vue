<template>
  <div class="tonglan">
    <div class="banxin">
      <ul>
        <li class="box" @mouseenter="item.show = true" @mouseleave="item.show = false" v-for="item in goodsList" :key="item.id">
          <div class="btn" v-show="item.show">
            <img src="/images/search/like.png" class="like" alt>
            <img src="/images/search/cart.png" class="cart" alt @click="addCart(item)">
          </div>
          <img :src="item.imgUrl" class="pro" alt>
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { mapState,mapMutations } from "vuex";
import axios from 'axios'
import { getStore } from "../../../localStorage.js";

export default {
  name: "SearchList",
  data() {
    return {
      num: 1,
      user: "",
      goodsList: [
        {
          id: "001",
          imgUrl: "/images/search/mi9.jpg",
          name: "小米1透明尊享版12GB+256GB",
          price: "3999元",
          show: false
        },
        {
          id: "002",
          imgUrl: "/images/search/mi9.jpg",
          name: "小米2透明尊享版12GB+256GB",
          price: "3999元",
          show: false
        },
        {
          id: "003",
          imgUrl: "/images/search/mi9.jpg",
          name: "小米3透明尊享版12GB+256GB",
          price: "3999元",
          show: false
        },
        {
          id: "004",
          imgUrl: "/images/search/mi9.jpg",
          name: "小米4透明尊享版12GB+256GB",
          price: "3999元",
          show: false
        }
      ]
    };
  },
  methods: {
    // ...mapMutations(["refresh"]),
    addCart(data) {
      let params = {
        goods: {
          userid: this.user,
          product_id: data.id,
          product_name: data.name,
          number: this.num,
          price: data.price,
          banner: data.imgUrl
        }
      };
      axios.post("/api/users/addCar", params).then(res => {});
    },
  },
  computed: {
    ...mapState(["goods"])
  },
  mounted() {
    this.user = localStorage.getItem("phone");
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  background-color: #f0f0f0;
  padding: 30px 0;
  .banxin {
    ul {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .box {
        width: 290px;
        height: 430px;
        background-color: #fff;
        text-align: center;
        margin: 0 5px;
        float: left;
        position: relative;
        &:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.2s linear;
        }
        .btn {
          width: 100%;
          height: 48px;
          position: absolute;
          top: 0;
          img {
            width: 24px;
            height: 24px;
            margin-top: 12px;
            cursor: pointer;
          }
          img.like {
            float: left;
            margin-left: 20px;
          }
          img.cart {
            float: right;
            margin-right: 20px;
          }
        }
        img.pro {
          width: 200px;
          height: 200px;
          cursor: pointer;
          margin-top: 48px;
        }
        .name {
          margin-top: 30px;
        }
        .price {
          margin-top: 20px;
          color: rgb(250, 81, 89);
        }
      }
    }
  }
}
</style>