<template>
  <div class="tonglan">
    <div class="banxin">
      <el-row>
        <el-col :span="4">
          <router-link to="/">
            <img class="logo" src="/images/logo.png" alt>
          </router-link>
        </el-col>
        <el-col :span="15">
          <ul>
            <li
              @mouseenter="show(item)"
              @mouseleave="show3 = false"
              v-for="item in navList"
              :key="item.id"
            >{{ item.name }}</li>
            <li>服务</li>
            <li>社区</li>
          </ul>
        </el-col>
        <el-col :span="5">
          <div class="box">
            <input type="text">
            <button @click="toSearch">
              <div class="fangdajing"></div>
            </button>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-collapse-transition>
      <div class="container" v-show="show3">
        <div class="banxin" @mouseenter="show3 = true" @mouseleave="show3 = false">
          <ol>
            <li v-for="item in proList[index]" :key="item.index">
              <p class="flag">
                <span v-if="item.flag">{{ item.flag }}</span>
              </p>

              <img :src="item.imgUrl" alt="图片" @click="toParameter">
              <p class="name">{{ item.name }}</p>
              <p class="price">{{ item.price }}</p>
            </li>
          </ol>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: "HeaderBav",
  data() {
    return {
      show3: false,
      index: 0,
      navList: [
        {
          id: 0,
          name: "小米手机"
        },
        {
          id: 1,
          name: "红米"
        },
        {
          id: 2,
          name: "电视"
        },
        {
          id: 3,
          name: "笔记本"
        },
        {
          id: 4,
          name: "家电"
        },
        {
          id: 5,
          name: "新品"
        },
        {
          id: 6,
          name: "路由器"
        },
        {
          id: 7,
          name: "智能硬件"
        }
      ],
      proList: [
        [
          {
            flag: "新品",
            imgUrl: "/images/home/mi9.png",
            name: "小米9",
            price: "2999元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/mi9.png",
            name: "小米9",
            price: "2999元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/mi9.png",
            name: "小米9",
            price: "2999元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/mi9.png",
            name: "小米9",
            price: "2999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/mi9.png",
            name: "小米9",
            price: "2999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/mi9.png",
            name: "小米9",
            price: "2999元"
          }
        ],
        [
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          }
        ],
        [
          {
            flag: "新品",
            imgUrl: "/images/home/bihuadianshi.png",
            name: "小米壁画电视 65英寸",
            price: "6999元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/bihuadianshi.png",
            name: "小米壁画电视 65英寸",
            price: "6999元"
          },
          {
            flag: "热卖",
            imgUrl: "/images/home/bihuadianshi.png",
            name: "小米壁画电视 65英寸",
            price: "6999元"
          },
          {
            flag: "热卖",
            imgUrl: "/images/home/bihuadianshi.png",
            name: "小米壁画电视 65英寸",
            price: "6999元"
          },
          {
            flag: "热卖",
            imgUrl: "/images/home/bihuadianshi.png",
            name: "小米壁画电视 65英寸",
            price: "6999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/bihuadianshi.png",
            name: "小米壁画电视 65英寸",
            price: "6999元"
          }
        ],
        [
          {
            flag: "新品",
            imgUrl: "/images/home/12.5yinsetoubu.png",
            name: "小米笔记本 Air 12.5",
            price: "3599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/12.5yinsetoubu.png",
            name: "小米笔记本 Air 12.5",
            price: "3599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/12.5yinsetoubu.png",
            name: "小米笔记本 Air 12.5",
            price: "3599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/12.5yinsetoubu.png",
            name: "小米笔记本 Air 12.5",
            price: "3599元"
          },
          {
            flag: "",
            imgUrl: "/images/home/12.5yinsetoubu.png",
            name: "小米笔记本 Air 12.5",
            price: "3599元"
          },
          {
            flag: "",
            imgUrl: "/images/home/12.5yinsetoubu.png",
            name: "小米笔记本 Air 12.5",
            price: "3599元"
          }
        ],
        [
          {
            flag: "",
            imgUrl: "/images/home/320_220.jpg",
            name: "米家互联网洗烘一体机",
            price: "1999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/320_220.jpg",
            name: "米家互联网洗烘一体机",
            price: "1999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/320_220.jpg",
            name: "米家互联网洗烘一体机",
            price: "1999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/320_220.jpg",
            name: "米家互联网洗烘一体机",
            price: "1999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/320_220.jpg",
            name: "米家互联网洗烘一体机",
            price: "1999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/320_220.jpg",
            name: "米家互联网洗烘一体机",
            price: "1999元"
          }
        ],
        [
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/redmi.jpg",
            name: "Redmi Note 7 Pro",
            price: "1599元"
          }
        ],
        [
          {
            flag: "新品",
            imgUrl: "/images/home/luyoumesh.jpg",
            name: "小米路由器 Mesh",
            price: "9999元"
          },
          {
            flag: "双频双核",
            imgUrl: "/images/home/luyoumesh.jpg",
            name: "小米路由器 Mesh",
            price: "9999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/luyoumesh.jpg",
            name: "小米路由器 Mesh",
            price: "9999元"
          },
          {
            flag: "",
            imgUrl: "/images/home/luyoumesh.jpg",
            name: "小米路由器 Mesh",
            price: "9999元"
          },
          {
            flag: "大容量",
            imgUrl: "/images/home/luyoumesh.jpg",
            name: "小米路由器 Mesh",
            price: "9999元"
          },
          {
            flag: "新品",
            imgUrl: "/images/home/luyoumesh.jpg",
            name: "小米路由器 Mesh",
            price: "9999元"
          }
        ],
        [
          {
            flag: "",
            imgUrl: "/images/home/yuntai.jpg",
            name: "小米米家智能摄像机云台版",
            price: "199元"
          },
          {
            flag: "",
            imgUrl: "/images/home/yuntai.jpg",
            name: "小米米家智能摄像机云台版",
            price: "199元"
          },
          {
            flag: "",
            imgUrl: "/images/home/yuntai.jpg",
            name: "小米米家智能摄像机云台版",
            price: "199元"
          },
          {
            flag: "",
            imgUrl: "/images/home/yuntai.jpg",
            name: "小米米家智能摄像机云台版",
            price: "199元"
          },
          {
            flag: "",
            imgUrl: "/images/home/yuntai.jpg",
            name: "小米米家智能摄像机云台版",
            price: "199元"
          },
          {
            flag: "",
            imgUrl: "/images/home/yuntai.jpg",
            name: "小米米家智能摄像机云台版",
            price: "199元"
          }
        ]
      ]
    };
  },
  methods: {
    show(item) {
      this.show3 = true;
      this.index = item.id;
    },
    toSearch() {
      this.$router.push({path:"/search"})
    },
    toParameter() {
      this.$router.push({path:"/overview"})
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/main.css";
.tonglan {
  position: relative;
  .banxin {
    .el-row {
      height: 100px;
      line-height: 100px;
      .el-col {
        img.logo {
          width: 55px;
          height: 55px;
          background-color: rgb(250, 81, 89);
        }
        ul {
          height: 100px;
          li {
            float: left;
            padding-right: 20px;
            font-size: 17px;
            cursor: pointer;
            &:hover {
              color: rgb(250, 81, 89);
            }
          }
        }
        .box {
          height: 50px;
          margin-top: 25px;
          border: 1px solid #ccc;
          position: relative;
          input {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            padding: 0 10px;
          }
          button {
            position: absolute;
            top: 0;
            right: 0;
            width: 50px;
            height: 100%;
            border-left: 1px solid #ccc;
            background-color: #fff;
            cursor: pointer;
            .fangdajing {
              width: 100%;
              height: 100%;
              background: url("/images/home/fangdajing.png") no-repeat center
                center;
            }
            &:hover {
              background-color: rgb(250, 81, 89);
              .fangdajing {
                background: url("/images/home/fangdajing2.png") no-repeat center
                  center;
              }
            }
          }
        }
      }
    }
  }

  .container {
    width: 100%;
    height: 230px;
    position: absolute;
    top: 100px;
    z-index: 2000;
    background-color: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);

    ol {
      li {
        float: left;
        width: 199px;
        height: 230px;
        text-align: center;
        p.flag {
          height: 30px;
          span {
            line-height: 28px;
            padding: 5px 15px;
            border: 1px solid rgb(250, 81, 89);
            color: rgb(250, 81, 89);
          }
        }

        img {
          width: 160px;
          height: 110px;
          margin: 10px 0;
          padding: 0 20px;
          border-right: 1px solid #ccc;
          cursor: pointer;
        }
        .name {
          cursor: pointer;
        }
        .price {
          color: rgb(250, 81, 89);
          margin-top: 10px;
        }
      }
    }
  }
}
</style>

