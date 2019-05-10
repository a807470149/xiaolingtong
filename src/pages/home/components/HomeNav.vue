<template>
  <div class="tonglan">
    <div class="banxin">
      <div class="box">
        <ul>
          <li v-for="item in nav" :key="item.index" @mouseenter="show(item)" @mouseleave="show3 = false">
            {{ item.name }}
            <span class="arrow"></span>
          </li>
        </ul>
      </div>

      <div class="product" v-show="show3" @mouseenter="show3=true" @mouseleave="show3=false">
        <ul>
          <li v-for="item in proList[index]" :key="item.index" @click="toDetail">
            <img :src="item.imgUrl" alt="" >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>


      <div class="slide">
        <el-carousel trigger="click" height="460px">
          <el-carousel-item v-for="item in img" :key="item">
            <img :src="item" alt>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="banner">
        <ul class="btn">
          <li>选购手机</li>
          <li>企业团购</li>
          <li>F码通道</li>
          <li>米粉卡</li>
          <li>以旧换新</li>
          <li>话费充值</li>
        </ul>
        <img class="bn" src="/images/home/banner01.jpg" alt="">
        <img class="bn" src="/images/home/banner02.jpg" alt="">
        <img class="bn" src="/images/home/banner03.jpg" alt="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      index: 0,
      show3: false,
      nav: [
        {
          id: 0,
          name: "手机 电话卡"
        },
        {
          id: 1,
          name: "电视 盒子"
        },
        {
          id: 2,
          name: "笔记本 平板"
        },
        {
          id: 3,
          name: "家电 插线板"
        },
        {
          id: 4,
          name: "出行 穿戴"
        },
        {
          id: 5,
          name: "智能 路由器"
        },
        {
          id: 6,
          name: "电源 配件"
        },
        {
          id: 7,
          name: "健康 儿童"
        },
        {
          id: 8,
          name: "耳机 音箱"
        },
        {
          id: 9,
          name: "生活 箱包"
        }
      ],
      img: [
        "/images/home/slide01.jpg",
        "/images/home/slide02.jpg",
        "/images/home/slide03.jpg",
        "/images/home/slide04.jpg",
        "/images/home/slide05.jpg"
      ],
      proList: [
        [
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          },
          {
            imgUrl: "/images/home/mi9-80.png",
            name: "小米9"
          }
        ],
        [
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
          {
            imgUrl: "/images/home/mijiajiguang4k.jpg",
            name: "米家激光投影电视"
          },
        ],
        [
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          },
          {
            imgUrl: "/images/home/bijiben80.jpg",
            name: "小米笔记本 15.6"
          }
        ],
        [
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          },
          {
            imgUrl: "/images/home/lishikongtiao.png",
            name: "米家互联网立式空调C1"
          }
        ],
        [
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          },
          {
            imgUrl: "/images/home/shouhuan3.jpg",
            name: "手环手表"
          }
        ],
        [
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          },
          {
            imgUrl: "/images/home/zhaopiandayinj.jpg",
            name: "打印机"
          }
        ],
        [
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          },
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          },
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          },
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          },
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          },
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          },
          {
            imgUrl: "/images/home/dianyuan2.100080.jpg",
            name: "移动电源"
          }
        ],
        [
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          },
          {
            imgUrl: "/images/home/xishouji.jpg",
            name: "洗手机"
          }
        ],
        [
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          },
          {
            imgUrl: "/images/home/xiaoaimini-08.jpg",
            name: "小米小爱音箱mini"
          }
        ],
        [
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          },
          {
            imgUrl: "/images/home/xiangbao-80.jpg",
            name: "双肩包"
          }
        ]
      ]
    };
  },
  methods: {
    show (item) {
      this.index = item.id;
      this.show3 = true;
    },
    toDetail () {
      this.$router.push({path: "detail"})
    }
  }
};
</script>


<style lang="less" scoped>
@import "~@/assets/styles/main.css";

.tonglan {
  margin-bottom: 30px;
  .banxin {
    position: relative;
    .box {
      width: 200px;
      line-height: 42px;
      padding: 20px 0;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      ul {
        li {
          height: 42px;
          padding-left: 30px;
          cursor: pointer;
          position: relative;
          &:hover {
            background-color: rgb(250, 81, 89);
          }
          .arrow {
            width: 8px;
            height: 8px;
            border-right: 2px solid #ccc;
            border-bottom: 2px solid #ccc;
            position: absolute;
            right: 50px;
            top: 16px;
            transform: rotate(-45deg);
          }
        }
      }
    }

    .product {
      width: 1000px;
      height: 420px;
      padding: 20px 0;
      background-color: #fff;
      position: absolute;
      left: 200px;
      top: 0;
      z-index: 1000;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0,0,0,0.18);
      ul {
        li {
          width: 210px;
          height: 70px;
          float: left;
          line-height: 70px;
          padding: 0 20px;
          cursor: pointer;
          // font-size: 13px;
          img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
          &:hover {
            color: rgb(250, 81, 89);
          }
        }
      }
    }

    .banner {
      margin-top: 20px;
      .btn {
        width: 200px;
        li {
          float: left;
          width: 66px;
          height: 85px;
          color: #ccc;
          text-align: center;
          line-height: 85px;
          font-size: 12px;
          // border: 1px solid #f0f0f0;
          background-color: #5f5750;
        }
      }
      .bn {
        width: 316px;
        margin-left: 18px;
        cursor: pointer;
      }
    }

  }
}
</style>

<style lang="less">
.slide {
  .el-carousel__arrow--left {
    left: 216px;
  }
  img {
    height: 460px;
  }
}
</style>

